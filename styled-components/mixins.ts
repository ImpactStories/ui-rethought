import { css } from "styled-components";
import {
  TColor,
  TDevice,
  TFont,
  TFontFamily,
  Theme,
} from "../configuration/config";
import { TGridMultiplier } from "./_interface";
import { getGridMultiplierAsNumber } from "./_utils";

export interface ISpacingMixinProps {
  // margins
  readonly marginTop?: TGridMultiplier | string;
  readonly marginRight?: TGridMultiplier | string;
  readonly marginBottom?: TGridMultiplier | string;
  readonly marginLeft?: TGridMultiplier | string;
  // paddings
  readonly paddingTop?: TGridMultiplier | string;
  readonly paddingRight?: TGridMultiplier | string;
  readonly paddingBottom?: TGridMultiplier | string;
  readonly paddingLeft?: TGridMultiplier | string;
}

const valueIsGridMultiplier = (value: TGridMultiplier | string) =>
  value.includes("x") && !value.includes("px");

const getSpacingPixelValue = (
  value: TGridMultiplier | string | undefined
): string | undefined => {
  if (value === undefined) {
    return undefined;
  }
  if (valueIsGridMultiplier(value)) {
    return `${getGridMultiplierAsNumber(value) * Theme.gridBaseValue}px`;
  } else return value;
};

export const SpacingMixin = (props: ISpacingMixinProps) => css`
  margin-top: ${getSpacingPixelValue(props.marginTop)};
  margin-right: ${getSpacingPixelValue(props.marginRight)};
  margin-bottom: ${getSpacingPixelValue(props.marginBottom)};
  margin-left: ${getSpacingPixelValue(props.marginLeft)};

  padding-top: ${getSpacingPixelValue(props.paddingTop)};
  padding-right: ${getSpacingPixelValue(props.paddingRight)};
  padding-bottom: ${getSpacingPixelValue(props.paddingBottom)};
  padding-left: ${getSpacingPixelValue(props.paddingLeft)};
`;

export const isMaxWidth = (media: TDevice) => {
  const maxWidth = Theme.deviceSizes[media];
  return `@media screen and (max-width: ${maxWidth})`;
};

export const isMinWidth = (media: TDevice) => {
  const maxWidth = Theme.deviceSizes[media] + 1;
  return `@media screen and (min-width: ${maxWidth})`;
};

// Get a hex color value with a given color id
export const getColorHexValue = (color: TColor): string => {
  return Theme.colors[color];
};

// Get the font family based on the chosen font type
export const getFontFamily = (font: TFont): TFontFamily => {
  if (font === "primary") {
    return Object.keys(Theme.fonts.primary)[0] as any;
  } else if (font === "secondary") {
    return Object.keys(Theme.fonts.secondary)[0] as any;
  } else {
    return font;
  }
};
