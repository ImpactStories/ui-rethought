import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ITypographyComponent, Typography } from "./index";

export default {
  title: "Base/Typography",
  component: Typography,
  argTypes: {
  },
} as Meta;

const Template: StoryFn<ITypographyComponent> = (args) => (
  <Typography {...args} />
);

export const Primary: StoryFn<ITypographyComponent> = Template.bind({});
Primary.args = {
  children: <span>This is a blind text.</span>,
  marginTop: "3x",
  tag: "h2"
};
