import styled from "styled-components";
import { TColor, TFont } from "../../configuration/config";
import {
  getColorHexValue,
  getFontFamily,
  ISpacingMixinProps,
  SpacingMixin,
} from "../../styled-components/mixins";

interface ITypographyStyleProps extends ISpacingMixinProps {
  color: TColor;
  font: TFont;
}

export const TypographyStyle = styled.div<ITypographyStyleProps>`
  ${(props) => SpacingMixin(props)}
  ${(props) => `color: ${getColorHexValue(props.color)}`};
  ${(props) => `font-family: ${getFontFamily(props.font)}`};
`;
