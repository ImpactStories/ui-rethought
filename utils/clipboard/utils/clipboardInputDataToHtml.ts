import {
  IClipboardInputBlock,
  IClipboardInputData,
  IClipboardInputNode,
  TClipboardInputBlockType,
} from "../interface";

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

const buildHTMLElement = (dataItem: IClipboardInputBlock): string => {
  const htmlTag = blockDictionary[dataItem.type];
  const element = `<${htmlTag}>${dataItem.children}</${htmlTag}>`;
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
