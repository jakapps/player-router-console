import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../App.css";
import { GameServerList } from '../game-server';

export default {
  title: 'Example/GameServerList',
  component: GameServerList
} as ComponentMeta<typeof GameServerList>;

const Template: ComponentStory<typeof GameServerList> = (args) => {
    return (
        <GameServerList {...args} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
    gameServers: {
        socketId1: {
            labels: { "label": "labelValue" },
            playerCapacity: 100,
            playerCount: 0,
            id: "serverid-8756rfdgu9whed87gd",
            gameServerURL: "gameserver.example.com:1234"
        },
        socketId2: {
            labels: { "label": "aDifferentLabelValue" },
            playerCapacity: 100,
            playerCount: 4,
            id: "serverid-87564309tijeoinvn",
            gameServerURL: "gameserver.example.com:1235"
        },
        socketId3: {
            labels: { "label": "aDifferentLabelValue", "stage": "beta" },
            playerCapacity: 100,
            playerCount: 81,
            id: "serverid-sfbwfwvbv",
            gameServerURL: "gameserver.example.com:1236"
        },
        socketId4: {
            labels: { "label": "aDifferentLabelValue", "stage": "beta" },
            playerCapacity: 100,
            playerCount: 100,
            id: "serverid-dib92hfuwjsfhuwfjwnef",
            gameServerURL: "gameserver.example.com:1237"
        }
    }
};
