import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../tailwind.bak.css";
import { Button } from '../button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <Button {...args}>
            Button
        </Button>
    )
};

export const Primary = Template.bind({});
Primary.args = {
    click: () => console.log("click")
};

/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
