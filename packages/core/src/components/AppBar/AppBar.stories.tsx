// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { AppBar, AppBarProps } from "./AppBar";

export default {
  title: "Example/AppBar",
  component: AppBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const TextAppBar = Template.bind({});
TextAppBar.args = {
  children: "Test",
  color: "primaryFg",
  backgroundColor: "primary"
};
