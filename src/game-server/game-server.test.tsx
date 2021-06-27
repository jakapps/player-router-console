
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameServer } from './game-server';

describe('GameServer', () => {

    beforeEach(() => {
        render(
            <GameServer
                playerCapacity="100"
                playerCount="5"
                id="testId"
            />
        );
    });

    test('renders id', () => {
        let id = screen.getByText("testId");
        expect(id).toBeInTheDocument();
    });

    test('renders player count', () => {
        let playerCountText = screen.getByText("5");
        expect(playerCountText).toBeInTheDocument();
    });

    test('renders player capacity', () => {
        let playerCapacityText = screen.getByText("100");
        expect(playerCapacityText).toBeInTheDocument();
    });

    test('renders labels', () => {

    });
});
