
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameServer } from './game-server';

describe('GameServer', () => {

    beforeEach(() => {
        render(
            <GameServer
                labels={{ testLabel: "testLabelValue", testLabel2: "testLabelValue2"}}
                playerCapacity="100"
                playerCount="5"
                gameServerURL="gameserver.example.com:1234"
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

        let label = screen.getByText("testLabel2");
        let labelText = screen.getByText("testLabelValue2");

        expect(label).toBeInTheDocument();
        expect(labelText).toBeInTheDocument();
    });

    test('renders gameServerURL', () => {

        let gameServerURLElement = screen.getByText("gameserver.example.com:1234");

        expect(gameServerURLElement).toBeInTheDocument();
    });
});
