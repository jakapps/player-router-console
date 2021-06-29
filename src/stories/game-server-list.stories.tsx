import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../tailwind.bak.css";
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
            id: "serverid-8756rfdgu9whed87gd"
        },
        socketId2: {
            labels: { "label": "aDifferentLabelValue" },
            playerCapacity: 100,
            playerCount: 4,
            id: "serverid-87564309tijeoinvn"
        },
        socketId3: {
            labels: { "label": "aDifferentLabelValue", "stage": "beta" },
            playerCapacity: 100,
            playerCount: 81,
            id: "serverid-sfbwfwvbv"
        },
        socketId4: {
            labels: { "label": "aDifferentLabelValue", "stage": "beta" },
            playerCapacity: 100,
            playerCount: 100,
            id: "serverid-dib92hfuwjsfhuwfjwnef"
        }
    }
};
