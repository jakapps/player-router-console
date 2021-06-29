import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { render, screen, fireEvent } from '@testing-library/react';
import WS from "jest-websocket-mock";

import SplashScreen from "./splash-screen";
import { WebsocketProvider } from "../contexts/websocket";

describe('SplashScreen', () => {
    let server;

    beforeEach(() => {
        server = new WS("ws://localhost:1234", { jsonProtocol: true });
        render(
            <WebsocketProvider>
                <SplashScreen />
            </WebsocketProvider>
        );
    });

    afterEach(() => {
        server.close();
        WS.clean();
    });

    test('login routine attempts to connect to websocket server', async () => {
        let urlElement = screen.getByLabelText('url-input');
        fireEvent.change(urlElement, { target: { value: 'ws://localhost:1234' }});

        let usernameElement = screen.getByLabelText('username-input');
        fireEvent.change(usernameElement, { target: { value: 'admin' }});

        let passwordElement = screen.getByLabelText('password-input');
        fireEvent.change(passwordElement, { target: { value: 'testPassword' }});

        let button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        await server.connected;
    });

    test('login routine displays error message for invalid urls', () => {

        let urlElement = screen.getByLabelText('url-input');
        fireEvent.change(urlElement, { target: { value: 'anInvalidUrl' }});

        let usernameElement = screen.getByLabelText('username-input');
        fireEvent.change(usernameElement, { target: { value: 'admin' }});

        let passwordElement = screen.getByLabelText('password-input');
        fireEvent.change(passwordElement, { target: { value: 'testPassword' }});

        let button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        let errorText = screen.getByText('Invalid URL');
        expect(errorText).toBeInTheDocument();
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
