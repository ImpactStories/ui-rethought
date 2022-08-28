import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { copyToClipboard } from "./clipboard";
import { CLIPBOARD_INPUT_DATA } from "./mock";

const ClipboardEmptyComponent: React.FC = () => {
  return (
    <div>
      <div
        onClick={() => {
          const clipboardContent = copyToClipboard(CLIPBOARD_INPUT_DATA, {
            isAlteringClipboard: false,
          });
          console.log(clipboardContent);
        }}
      >
        Click to copy to clipboard
      </div>
    </div>
  );
};

export default {
  title: "Utils/Clipboard",
  component: ClipboardEmptyComponent,
  argTypes: {},
} as ComponentMeta<typeof ClipboardEmptyComponent>;

const Template: ComponentStory<typeof ClipboardEmptyComponent> = (args) => (
  <ClipboardEmptyComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
