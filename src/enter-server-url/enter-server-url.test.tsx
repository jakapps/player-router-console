import React from 'react';
import { render, screen } from '@testing-library/react';
import EnterServerURL from './enter-server-url';

describe('EnterServerURL', () => {

    test('renders input box', () => {
        render(<EnterServerURL />);
        const inputElement = screen.getByLabelText('input');
        expect(inputElement).toBeInTheDocument();
    });
});
