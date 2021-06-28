import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameServerList } from './game-server-list';

describe("GameServerList", () => {

    test('renders all game servers', () => {

        let gameServers: any = {

            "testSocketId": {
                id: "testServer",
                playerCount: 3,
                playerCapacity: 100,
                labels: {}
            },
            "testSocketId2": {
                id: "testServer2",
                playerCount: 3,
                playerCapacity: 100,
                labels: {}
            }
        };

        render(<GameServerList gameServers={gameServers} />);

        let text1 = screen.getByText('testServer');
        let text2 = screen.getByText('testServer2');

        expect(text1).toBeInTheDocument();
        expect(text2).toBeInTheDocument();
    });
});
