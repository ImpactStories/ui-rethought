import styled from "styled-components";
import {
  ISpacingMixinProps,
  SpacingMixin,
} from "../../styled-components/mixins";

interface ITypographyStyleProps extends ISpacingMixinProps {}

// The Button from the last section without the interpolations
export const TypographyStyle = styled.div<ITypographyStyleProps>`
  ${(props) => SpacingMixin(props)}
`;
