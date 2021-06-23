import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './login';

describe('Login', () => {

    beforeEach(() => {
        render(<Login />);
    });

    test('renders url input box', () => {
        const inputElement = screen.getByLabelText('url-input');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders username input box', () => {
        const inputElement = screen.getByLabelText('username-input');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders password input box', () => {
        const inputElement = screen.getByLabelText('password-input');
        expect(inputElement).toBeInTheDocument();
    });
});
