import styled from "styled-components";
import { Theme } from "../configuration/config";
import { TGridMultiplier } from "./_interface";
import { getGridMultiplierAsNumber } from "./_utils";

export interface ISpacingStyleProps {
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

// The Button from the last section without the interpolations
export const SpacingStyle = styled.div<ISpacingStyleProps>`
  margin-top: ${(props) => getSpacingPixelValue(props.marginTop)};
  margin-right: ${(props) => getSpacingPixelValue(props.marginRight)};
  margin-bottom: ${(props) => getSpacingPixelValue(props.marginBottom)};
  margin-left: ${(props) => getSpacingPixelValue(props.marginLeft)};

  padding-top: ${(props) => getSpacingPixelValue(props.paddingTop)};
  padding-right: ${(props) => getSpacingPixelValue(props.paddingRight)};
  padding-bottom: ${(props) => getSpacingPixelValue(props.paddingBottom)};
  padding-left: ${(props) => getSpacingPixelValue(props.paddingLeft)};
`;
