import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { render, screen, fireEvent } from '@testing-library/react';

import { UserContext, UserProvider } from "../contexts/user";
import { GameServerProvider } from "../contexts/game-server";

import Dashboard from "./dashboard";

describe('Dashboard', () => {

    beforeEach(() => {
        let gameServers: any = {

            "testSocketId": {
                id: "testServer",
                playerCount: 3,
                playerCapacity: 100,
                labels: {}
            }
        };

        render(
            <BrowserRouter>
                <UserProvider initialUsername="testUser">
                    <GameServerProvider initialGameServers={ gameServers }>
                        <Dashboard />
                    </GameServerProvider>
                </UserProvider>
            </BrowserRouter>
        );
    });

    test('should have a logout button that logs out user', () => {
        let logoutButton = screen.getByText('Logout');
        let usernameText = screen.getByLabelText('username');
        expect(logoutButton).toBeInTheDocument();
        expect(usernameText.innerHTML).toBe('testUser')

        fireEvent.click(logoutButton);

        usernameText = screen.getByLabelText('username');
        expect(usernameText.innerHTML).not.toBe('testUser')
    });

    test('displays game servers', () => {
        let gameServerId = screen.getByText('testServer');
        expect(gameServerId).toBeInTheDocument();
    });
});
