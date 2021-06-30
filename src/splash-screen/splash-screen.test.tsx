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

        beforeEach(() => {
            let usernameElement = screen.getByLabelText('username-input');
            fireEvent.change(usernameElement, { target: { value: 'admin' }});

            let passwordElement = screen.getByLabelText('password-input');
            fireEvent.change(passwordElement, { target: { value: 'testPassword' }});
        });

        test('attempts to connect to websocket server', async () => {
            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://localhost:1234' }});

            let button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            fireEvent.click(button);

            await server.connected;
        });

        test('displays error message for invalid urls', async () => {

            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'anInvalidUrl' }});

            let button = screen.getByRole('button');
            expect(button).toBeInTheDocument();

            act(() => {
                fireEvent.click(button);
            });

            let errorText = await screen.findByText('Invalid URL');
            expect(errorText).toBeInTheDocument();
        });

        test('displays error message when fails to connect to server', async () => {

            let urlElement = screen.getByLabelText('url-input');
            fireEvent.change(urlElement, { target: { value: 'ws://wrongurl.localhost:1235' }});

            let button = screen.getByRole('button');
            expect(button).toBeInTheDocument();

            act(() => {
                fireEvent.click(button);
            });

            let errorText = await screen.findByText('Failed to connect to server');
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
