import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../tailwind.bak.css";
import "../App.css";
import { GameServer } from '../game-server';

export default {
  title: 'Example/GameServer',
  component: GameServer
} as ComponentMeta<typeof GameServer>;

const Template: ComponentStory<typeof GameServer> = (args) => {
    return (
        <GameServer {...args} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
    labels: { "label": "labelValue" },
    playerCapacity: 100,
    playerCount: 0,
    id: "serverid-8756rfdgu9whed87gd",
    gameServerURL: "gameserver.example.com:1234"
};
