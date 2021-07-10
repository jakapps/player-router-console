import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './input-field';

describe('InputField', () => {

    test('can set input type', () => {
        render(
            <>
                <InputField name="test" type="password" />
                <InputField name="test2" />
            </>
        );

        const inputElement = screen.getByLabelText('test-input');
        expect(inputElement.type).toBe("password");

        const inputElement2 = screen.getByLabelText('test2-input');
        expect(inputElement2.type).toBe("text");
    });
});
