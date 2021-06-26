
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameServer } from './game-server';

describe('GameServer', () => {

    test('renders player count', () => {
        render(<GameServer playerCount="5" />);
        let playerCountText = screen.getByText("5");
        expect(playerCountText).toBeInTheDocument();
    });

    test('renders labels', () => {

    });
});
