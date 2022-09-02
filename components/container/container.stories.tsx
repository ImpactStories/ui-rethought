import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./index";

export default {
  title: "Base/Container",
  component: Container,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
