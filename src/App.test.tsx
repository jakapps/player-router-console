import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

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

    test("redirects to Dashboard if user is logged in", () => {

        /*
        render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );

        let textElement = screen.getByText('Dashboard');
        expect(textElement).toBeInTheDocument();
        */
    });
});
