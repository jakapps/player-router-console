import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './login';

describe('Login', () => {

    test('renders input box', () => {
        render(<Login />);
        const inputElement = screen.getByLabelText('input');
        expect(inputElement).toBeInTheDocument();
    });
});
