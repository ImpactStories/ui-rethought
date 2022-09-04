import styled from "styled-components";
import { TColor, TFont } from "../../configuration/config";
import {
  getColorHexValue,
  ISpacingMixinProps,
  SpacingMixin,
} from "../../styled-components/mixins";

interface ITypographyStyleProps extends ISpacingMixinProps {
  color: TColor;
  fontFamily: TFont;
}

export const TypographyStyle = styled.div<ITypographyStyleProps>`
  ${(props) => SpacingMixin(props)}
  ${(props) => `color: ${getColorHexValue(props.color)}`}
`;
