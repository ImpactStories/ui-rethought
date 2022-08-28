import { IClipboardInputData } from "./interface";

export const CLIPBOARD_INPUT_DATA: IClipboardInputData  = [
    {
        type: "h1",
        children: [
            {
                type: ["span"],
                text: "Headline 1"
            }
        ]
    },
    {
        type: "h2",
        children: [
            {
                type: ["bold"],
                text: "Headline 2"
            }
        ]
    },
    {
        type: "uli",
        children: [
            {
                type: ["bold"],
                text: "List item 1"
            }
        ]
    },
    {
        type: "uli",
        children: [
            {
                type: ["bold"],
                text: "List item 2"
            }
        ]
    }
]