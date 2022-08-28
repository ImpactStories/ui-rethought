export interface ICopyToClipboardOptions {
  // Keep the current clipboard and only alter passed types
  isAlteringClipboard?: boolean;
  // Types which should be copied to clipboard
  // For altering this means that all types which are not set here
  // will be kept
  types?: TClipboardFormattedDataType[];
}

export type TClipboardInputNodeType =
  | "default"
  | "bold"
  | "underline"
  | "italic";

export type TClipboardInputBlockType =
  | "block"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "uli"
  | "oli"
  | "img";

export interface IClipboardInputNode {
  type: TClipboardInputNodeType[];
  children: IClipboardInputNode[];
}

export interface IClipboardInputBlock {
  type: TClipboardInputBlockType;
  children: IClipboardInputNode[];
}

export type IClipboardInputData = IClipboardInputBlock[];

export type TClipboardFormattedDataType =
  | "html"
  | "plain"
  | "markdown"
  | "slate";

export interface IClipboardFormattedData {
  html: string | undefined;
  markdown: string | undefined;
  plain: string | undefined;
  slate: any | undefined;
}
