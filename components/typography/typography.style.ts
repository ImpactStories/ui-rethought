import styled from "styled-components";
import { TColor, TFont, TFontSize } from "../../configuration/config";
import {
  getColorHexValue,
  getFontFamily,
  getFontSizeInPixel,
  ISpacingMixinProps,
  SpacingMixin,
} from "../../styled-components/mixins";

interface ITypographyStyleProps extends ISpacingMixinProps {
  color: TColor;
  font: TFont;
  fontSize: TFontSize;
}

export const TypographyStyle = styled.div<ITypographyStyleProps>`
  ${(props) => SpacingMixin(props)}
  ${(props) => `color: ${getColorHexValue(props.color)}`};
  ${(props) => `font-family: ${getFontFamily(props.font)}`};
  ${(props) => `font-size: ${getFontSizeInPixel(props.fontSize)}`};
`;
