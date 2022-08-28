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
  span: "span",
  bold: "b",
  underline: "u",
  italic: "i",
};

const blockDictionary: {
  [key in TClipboardInputBlockType]: string;
} = {
  block: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  uli: "li",
  oli: "li",
  img: "img",
};

const buildInlineElement = (inlineData: IClipboardInputNode[]): string => {
  const data = inlineData
    .map((inlineDataChild) => {
      const tags = inlineDataChild.type.map((currentType) => {
        const htmlTag = inlineDictionary[currentType];
        const innerContent = inlineDataChild.children
          ? buildInlineElement(inlineDataChild.children)
          : inlineDataChild.text;
        const element = `<${htmlTag}>${innerContent}</${htmlTag}>`;
        return element;
      });
      return tags.join("");
    })
    .join("");
  return data;
};

const buildHTMLElement = (dataItem: IClipboardInputBlock): string => {
  const htmlTag = blockDictionary[dataItem.type];
  const element = `<${htmlTag}>${buildInlineElement(
    dataItem.children
  )}</${htmlTag}>`;
  return element;
};

const generateBlocks = (data: IClipboardInputData): string => {
  const blocksHTML = data
    .map((dataItem) => {
      const element = buildHTMLElement(dataItem);
      return element;
    })
    .join("");
  return blocksHTML;
};

export const clipboardInputDataToHTML = (data: IClipboardInputData): string => {
  const blocks = generateBlocks(data);
  return blocks;
};
