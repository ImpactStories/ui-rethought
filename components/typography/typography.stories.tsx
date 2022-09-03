import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./index";

export default {
  title: "Base/Typography",
  component: Typography,
  argTypes: {
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    {
      args.children
    }
  </Typography>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <span>My first text</span>,
  marginTop: "3x",
  tag: "h2"
};
