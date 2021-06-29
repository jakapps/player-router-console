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
});
