import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./index";

export default {
  title: "Base/Container",
  component: Container,
  argTypes: {
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    {
      args.children
    }
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Whats Up</div>,
  marginTop: "3x"
};
