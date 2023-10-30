import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Container } from "./index";

export default {
  title: "Base/Container",
  component: Container,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'The container can be used whenever you need to generate a grid or add margins to a block.',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Container> = (args) => (
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
