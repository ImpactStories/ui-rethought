import { TColor } from "../../configuration/config";
import { ISpacingStyleProps } from "../../styled-components/base";
import { TypographyStyle } from "./typography.style";

type TTypographyComponentTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface ITypographyComponent extends ISpacingStyleProps {
  children: React.ReactNode;
  tag?: TTypographyComponentTag;
  color?: TColor;
}

export const Typography: React.FC<ITypographyComponent> = ({
  children,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  tag = "p",
  color = "red-100",
}) => {
  return (
    <TypographyStyle
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      as={tag}
    >
      {children}
    </TypographyStyle>
  );
};
