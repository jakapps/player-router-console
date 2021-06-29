import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

import { UserProvider } from "./contexts/user";
import App from './App';

describe('App', () => {

    test("redirects to SplashScreen if user isn't logged in", () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        let textElement = screen.getByText('Player Router Server');
        expect(textElement).toBeInTheDocument();
    });

    test("redirects to Dashboard if user is logged in", async () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <UserProvider initialUsername="testUser">
                    <App />
                </UserProvider>
            </MemoryRouter>
        );

        let textElement = screen.getByText('Dashboard');
        expect(textElement).toBeInTheDocument();
    });
});
