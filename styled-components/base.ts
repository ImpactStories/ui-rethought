import styled from "styled-components";

interface ISpacingStyleProps {
  readonly marginTop?: string;
  readonly marginRight?: string;
  readonly marginBottom?: string;
  readonly marginLeft?: string;
}

// The Button from the last section without the interpolations
export const SpacingStyle = styled.div<ISpacingStyleProps>`
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
`;

