import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';

describe('Login', () => {
    let onSubmit;

    beforeEach(() => {
        onSubmit = jest.fn();
        render(<Login onSubmit={onSubmit} />);
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

    describe('when login button is clicked', () => {

        describe('when url field is filled in', () => {

            test('onSubmit callback is called with url data', () => {
                let urlElement = screen.getByLabelText('url-input');
                fireEvent.change(urlElement, { target: { value: 'example.url.com' }});

                let button = screen.getByRole('button');
                fireEvent.click(button);

                expect(onSubmit).toHaveBeenCalledWith({ url: 'example.url.com' });
            });
        });

        describe('when url, username and password fields are filled in', () => {

            test('onSubmit callback is called with username, password and url data', () => {

            });
        });

        describe('when no fields are filled in', () => {

            test('onSubmit callback is not called', () => {

            });

            test('error message should appear, promting user to enter a url', () => {

            });
        });
    });

    describe('when server not found error is added to props', () => {

        test('error message appears, informing user that the server cannot be found', () => {

        });
    });

    describe('when failed authentication error is added to props', () => {

        test('error message appear, informing user that the username and/or password is not valid', () => {

        });
    });
});
