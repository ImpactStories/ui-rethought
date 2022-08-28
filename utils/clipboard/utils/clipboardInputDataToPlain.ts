import {
  IClipboardInputBlock,
  IClipboardInputData,
  TClipboardInputBlockType,
} from "../interface";

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

const buildMarkdownElement = (dataItem: IClipboardInputBlock): string => {
  const markdownTag = blockDictionary[dataItem.type];
  const element = `${markdownTag} ${dataItem.children} \\`;
  return element;
};

const generateBlocks = (data: IClipboardInputData): string => {
  const blocksMarkdown = data
    .map((dataItem) => {
      const element = buildMarkdownElement(dataItem);
      return element;
    })
    .join("");
  return blocksMarkdown;
};

export const clipboardInputDataToPlain = (
  data: IClipboardInputData
): string => {
  const blocks = generateBlocks(data);
  return blocks;
};
