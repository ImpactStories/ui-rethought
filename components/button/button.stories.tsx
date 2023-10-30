import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { IButtonComponent, Button } from "./index";

export default {
  title: "Base/Button",
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: StoryFn<IButtonComponent> = (args) => (
  <Button {...args} />
);

export const Primary: StoryFn<IButtonComponent> = Template.bind({});
Primary.args = {
  children: <span>This is a blind text.</span>,
};
