import { TColor, TFont } from "../../configuration/config";
import { ISpacingStyleProps } from "../../styled-components/base";
import { buildFonts } from "../../styled-components/fonts";
import { ISpacingMixinProps } from "../../styled-components/mixins";
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

interface ITypographyComponent extends ISpacingMixinProps {
  children: React.ReactNode;
  tag?: TTypographyComponentTag;
  color?: TColor;
  font?: TFont;
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
  font = "Noto Sans"
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
      color={color}
      font={font}
      as={tag}
    >
      {children}
    </TypographyStyle>
  );
};
