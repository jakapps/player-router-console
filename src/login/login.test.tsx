import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';

describe('Login', () => {
    let onSubmit;
    let errorUrl;
    let errorUsername;
    let errorPassword;

    beforeEach(() => {
        onSubmit = jest.fn();
        errorUrl = "Server not found";
        errorUsername = "User not found";
        errorPassword = "Invalid Password";

        render(<Login
            onSubmit={onSubmit}
            errorUrl={errorUrl}
            errorUsername={errorUsername}
            errorPassword={errorPassword}
        />);
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
                let urlElement = screen.getByLabelText('url-input');
                fireEvent.change(urlElement, { target: { value: 'example.url.com' }});

                let usernameElement = screen.getByLabelText('username-input');
                fireEvent.change(usernameElement, { target: { value: 'admin' }});

                let passwordElement = screen.getByLabelText('password-input');
                fireEvent.change(passwordElement, { target: { value: 'testPassword' }});

                let button = screen.getByRole('button');
                fireEvent.click(button);

                expect(onSubmit).toHaveBeenCalledWith({
                    url: 'example.url.com',
                    username: 'admin',
                    password: 'testPassword'
                });
            });
        });

        describe('when no fields are filled in', () => {

            test('onSubmit callback is not called', () => {
                let button = screen.getByRole('button');
                fireEvent.click(button);

                expect(onSubmit).not.toHaveBeenCalled();
            });

            test('error message should appear, promting user to enter a url', () => {
                let button = screen.getByRole('button');
                fireEvent.click(button);

                let error = screen.getByText("Enter a valid url for Player Router server");
                expect(error).toBeInTheDocument();
            });

            test('changing field should remove error message', () => {
                let button = screen.getByRole('button');
                fireEvent.click(button);

                let error = screen.getByText("Enter a valid url for Player Router server");
                expect(error).toBeInTheDocument();

                let urlElement = screen.getByLabelText('url-input');
                fireEvent.change(urlElement, { target: { value: 'example.url.com' }});

                error = screen.getByText("Player Router Server");
                expect(error).toBeInTheDocument();
            });
        });
    });

    describe('when server not found error is added to props', () => {

        test('error message appears, informing user that the server cannot be found', () => {
            let error = screen.getByText("Server not found");
            expect(error).toBeInTheDocument();
        });
    });

    describe('when failed authentication error is added to props', () => {

        test('error message appear, informing user that the username and/or password is not valid', () => {
            let userNameErrorText = screen.getByText("User not found");
            let passwordInvalidText = screen.getByText("Invalid Password");

            expect(userNameErrorText).toBeInTheDocument();
            expect(passwordInvalidText).toBeInTheDocument();
        });
    });
});
