import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { render, screen, fireEvent, act } from '@testing-library/react';
import WS from "jest-websocket-mock";

import SplashScreen from "./splash-screen";
import { WebsocketProvider } from "../contexts/websocket";

describe('SplashScreen', () => {
    let server;

    beforeEach(() => {
        server = new WS("ws://localhost:1234", { jsonProtocol: true });
        server.nextMessage.then((message: any) => {

            if(message.password === "correctPassword") {
                server.send({
                    code: 200,
                    user: {
                        username: message.username
                    },
                    gameServers: {

                        "testSocketId": {
                            id: "testServer",
                            playerCount: 7,
                            playerCapacity: 100,
                            labels: {}
                        }
                    }
                });
            } else {
                server.send({ code: 401, errorMessage: "Authentication failed" });
            }
        });

        act(() => {

            render(
                <WebsocketProvider>
                    <SplashScreen />
                </WebsocketProvider>
            );
        });
    });

    afterEach(() => {
        server.close();
        WS.clean();
    });

    describe('login routine', () => {
        let button;

        beforeEach(() => {
            let usernameElement = screen.getByLabelText('username-input');
            fireEvent.change(usernameElement, { target: { value: 'admin' }});

            let passwordElement = screen.getByLabelText('password-input');
            fireEvent.change(passwordElement, { target: { value: 'testPassword' }});

            button = screen.getByRole('button');
        });

        test('attempts to connect to websocket server', async () => {
            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://localhost:1234' }});

            fireEvent.click(button);

            await server.connected;
        });

        test('displays error message for invalid urls', async () => {

            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'anInvalidUrl' }});

            act(() => {
                fireEvent.click(button);
            });

            let errorText = await screen.findByText('Invalid URL');
            expect(errorText).toBeInTheDocument();
        });

        test('displays error message when fails to connect to server', async () => {

            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://wrongurl.localhost:1235' }});

            act(() => {
                fireEvent.click(button);
            });

            let errorText = await screen.findByText('Failed to connect to server');
            expect(errorText).toBeInTheDocument();
        });

        test('displays error messages when authentication fails', async () => {
            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://localhost:1234' }});

            let passwordElement = screen.getByLabelText('password-input');
            fireEvent.change(passwordElement, { target: { value: 'wrongPassword' }});

            act(() => {
                fireEvent.click(button);
            });

            let errorText = await screen.findByText('Authentication failed');
            expect(errorText).toBeInTheDocument();
        });
    });

    describe('when no fields are filled in', () => {

        test('error message should appear, promting user to enter a url', () => {
            let button = screen.getByRole('button');
            fireEvent.click(button);

            let error = screen.getByText("Enter a URL for Player Router server");
            expect(error).toBeInTheDocument();
        });

        test('re-submitting should remove error message', () => {
            let button = screen.getByRole('button');
            fireEvent.click(button);

            let error = screen.getByText("Enter a URL for Player Router server");
            expect(error).toBeInTheDocument();

            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://example.url.com' }});

            fireEvent.click(button);

            error = screen.getByText("Player Router Server");
            expect(error).toBeInTheDocument();
        });
    });
});
