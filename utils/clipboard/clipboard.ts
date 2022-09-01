import { CLIPBOARD_TYPE_HTML, CLIPBOARD_TYPE_PLAIN } from "./const";
import {
  IClipboardFormattedData,
  IClipboardInputData,
  ICopyToClipboardOptions,
} from "./interface";
import { clipboardInputDataToHTML } from "./utils/clipboardInputDataToHtml";
import { clipboardInputDataToMarkdown } from "./utils/clipboardInputDataToMarkdown";
import { clipboardInputDataToPlain } from "./utils/clipboardInputDataToPlain";

// Create blobs of the formatted data
// And create the object to pass to the clipboard
const buildClipboardData = (formattedData: IClipboardFormattedData) => {
  const blobHtml = formattedData.html
    ? new Blob([formattedData.html], {
        type: CLIPBOARD_TYPE_HTML,
      })
    : undefined;

  const blobPlain = formattedData.plain
    ? new Blob([formattedData.plain], {
        type: CLIPBOARD_TYPE_PLAIN,
      })
    : undefined;

  const clipboardData: any = {
    [CLIPBOARD_TYPE_HTML]: blobHtml,
    [CLIPBOARD_TYPE_PLAIN]: blobPlain,
  };

  const clipboardDataFiltered = Object.keys(clipboardData)
    .filter((key) => !!clipboardData[key])
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: clipboardData[key],
      });
    }, {});

  return clipboardDataFiltered;
};

const createNewClipboard = (
  formattedData: IClipboardFormattedData,
  options: ICopyToClipboardOptions
) => {
  const clipboardDataFiltered = buildClipboardData(formattedData);
  // Create a new clipboard
  // Data must be an object, with the different types as key and blob as value
  const clipboardItemInput = new ClipboardItem(clipboardDataFiltered);
  // Write the new data to clipboard
  (navigator.clipboard as unknown as Clipboard).write([clipboardItemInput]);
};

const alterExistingClipboard = (
  formattedData: IClipboardFormattedData,
  event: ClipboardEvent,
  options: ICopyToClipboardOptions
) => {
  if (formattedData.html) {
    event.clipboardData?.setData(CLIPBOARD_TYPE_HTML, formattedData.html);
  }
  if (formattedData.plain) {
    event.clipboardData?.setData(CLIPBOARD_TYPE_PLAIN, formattedData.plain);
  }
};

// normalizes copy paste for the most famous editors
export const copyToClipboard = (
  data: IClipboardInputData,
  options: ICopyToClipboardOptions,
  event?: ClipboardEvent
) => {
  // If clipboard is not altered, prevent the original to-clipboard-copy-functionality
  if (!options.isAlteringClipboard) {
    event?.preventDefault();
  }

  if (!options.types) {
    options.types = ["html", "markdown", "plain"];
  }

  const markdownContent = clipboardInputDataToMarkdown(data);
  const plainContent = options.isCopyingPlainAsMarkdown
    ? markdownContent
    : clipboardInputDataToPlain(data);

  const formattedData: IClipboardFormattedData = {
    html: options.types?.includes("html")
      ? clipboardInputDataToHTML(data)
      : undefined,
    markdown: options.types?.includes("markdown") ? markdownContent : undefined,
    plain: options.types?.includes("plain") ? plainContent : undefined,
  };

  if (!options.isAlteringClipboard) {
    createNewClipboard(formattedData, options);
  } else {
    if (event) {
      alterExistingClipboard(formattedData, event, options);
    } else {
      console.info(
        "Clipboard:",
        "The onCopy event must be passed to alter a given clipboard."
      );
    }
  }
};
