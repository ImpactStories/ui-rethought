import {
  IClipboardInputBlock,
  IClipboardInputData,
  IClipboardInputNode,
  TClipboardInputBlockType,
  TClipboardInputNodeType,
} from "../interface";

const inlineDictionary: {
  [key in TClipboardInputNodeType]: string;
} = {
  span: "",
  bold: "**",
  underline: "_",
  italic: "*",
};

const blockDictionary: {
  [key in TClipboardInputBlockType]: string;
} = {
  block: "",
  h1: "#",
  h2: "##",
  h3: "###",
  h4: "####",
  uli: "-",
  oli: "-",
  img: "img",
};

const buildInlineElement = (inlineData: IClipboardInputNode[]): string => {
  const data = inlineData
    .map((inlineDataChild) => {
      const tags = inlineDataChild.type.map((currentType) => {
        const markdownSign = inlineDictionary[currentType];
        // bulid inline elements as long as there are children
        const innerContent = inlineDataChild.children
          ? buildInlineElement(inlineDataChild.children)
          : inlineDataChild.text;
        const element = `${markdownSign}${innerContent}${markdownSign}`;
        return element;
      });
      return tags.join("");
    })
    .join("");
  return data;
};

const buildMarkdownElement = (dataItem: IClipboardInputBlock): string => {
  const markdownTag = blockDictionary[dataItem.type];
  const element = `${markdownTag} ${buildInlineElement(dataItem.children)}`;
  return element;
};

const generateBlocks = (data: IClipboardInputData): string => {
  const blocksMarkdown = data
    .map((dataItem) => {
      const element = buildMarkdownElement(dataItem);
      return element;
    })
    .join("\n\n");
  return blocksMarkdown;
};

export const clipboardInputDataToMarkdown = (
  data: IClipboardInputData
): string => {
  const blocks = generateBlocks(data);
  return blocks;
};
