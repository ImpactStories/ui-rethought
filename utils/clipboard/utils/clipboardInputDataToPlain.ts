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
    bold: "",
    underline: "",
    italic: "",
  };
  
  const blockDictionary: {
    [key in TClipboardInputBlockType]: string;
  } = {
    block: "",
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    uli: "-",
    oli: "-",
    img: "img",
  };
  
  const buildInlineElement = (inlineData: IClipboardInputNode[]): string => {
    const data = inlineData
      .map((inlineDataChild) => {
        const tags = inlineDataChild.type.map((currentType) => {
          const plainSign = inlineDictionary[currentType];
          // bulid inline elements as long as there are children
          const innerContent = inlineDataChild.children
            ? buildInlineElement(inlineDataChild.children)
            : inlineDataChild.text;
          const element = `${plainSign}${innerContent}`;
          return element;
        });
        return tags.join("");
      })
      .join("");
    return data;
  };
  
  const buildPlainElement = (dataItem: IClipboardInputBlock): string => {
    const plainTag = blockDictionary[dataItem.type];
    const element = `${plainTag} ${buildInlineElement(dataItem.children)}`;
    return element;
  };
  
  const generateBlocks = (data: IClipboardInputData): string => {
    const blocksPlain = data
      .map((dataItem) => {
        const element = buildPlainElement(dataItem);
        return element;
      })
      .join("\n\n");
    return blocksPlain;
  };
  
  export const clipboardInputDataToPlain = (
    data: IClipboardInputData
  ): string => {
    const blocks = generateBlocks(data);
    return blocks;
  };
  