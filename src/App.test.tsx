import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

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

        render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );

        let urlElement = screen.getByLabelText('url-input');
        fireEvent.change(urlElement, { target: { value: 'example.url.com' }});

        let usernameElement = screen.getByLabelText('username-input');
        fireEvent.change(usernameElement, { target: { value: 'admin' }});

        let passwordElement = screen.getByLabelText('password-input');
        fireEvent.change(passwordElement, { target: { value: 'password123' }});

        let button = screen.getByRole('button');
        fireEvent.click(button);

        let textElement = screen.getByText('Dashboard');
        expect(textElement).toBeInTheDocument();
    });
});
