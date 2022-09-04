import styled from "styled-components";
import { TColor } from "../../configuration/config";
import {
  getColor,
  ISpacingMixinProps,
  SpacingMixin,
} from "../../styled-components/mixins";

interface ITypographyStyleProps extends ISpacingMixinProps {
  color: TColor;
}

// The Button from the last section without the interpolations
export const TypographyStyle = styled.div<ITypographyStyleProps>`
  ${(props) => SpacingMixin(props)}
  ${(props) => `color: ${getColor(props.color)}`}
`;
