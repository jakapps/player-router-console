import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../tailwind.bak.css";
import "../App.css";
import { Login } from '../login';

export default {
  title: 'Example/Login',
  component: Login
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => {
    return (
        <div className="flex">
            <Login {...args} />
        </div>
    )
};

export const Primary = Template.bind({});
Primary.args = {
    loading: false
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true
};
