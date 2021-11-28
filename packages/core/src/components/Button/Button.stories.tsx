import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Colors from "../../stories/assets/colors.svg";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
  children: "Test",
  color: "#ccc",
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <Colors />,
  color: "#ccc",
};
