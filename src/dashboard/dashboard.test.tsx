import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { render, screen, fireEvent } from '@testing-library/react';

import { UserContext, UserProvider } from "../contexts/user";

import Dashboard from "./dashboard";

describe('Dashboard', () => {

    test('should have a logout button that logs out user', () => {
        render(
            <BrowserRouter>
                <UserProvider initialUsername="testUser">
                    <Dashboard />
                </UserProvider>
            </BrowserRouter>
        );

        let logoutButton = screen.getByText('Logout');
        let usernameText = screen.getByLabelText('username');
        expect(logoutButton).toBeInTheDocument();
        expect(usernameText.innerHTML).toBe('testUser')

        fireEvent.click(logoutButton);

        usernameText = screen.getByLabelText('username');
        expect(usernameText.innerHTML).not.toBe('testUser')
    });
});
