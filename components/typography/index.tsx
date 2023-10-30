import { TColor, TFont, TFontSize } from "../../configuration/config";
import { ISpacingMixinProps } from "../../styled-components/mixins";
import { TypographyStyle } from "./typography.style";
import React from "react";

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

export interface  ITypographyComponent extends ISpacingMixinProps {
  children: any;
  tag?: TTypographyComponentTag;
  color?: TColor;
  font?: TFont;
  fontSize? :TFontSize;
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
  font = "Noto Sans",
  fontSize = "regular"
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
      fontSize={fontSize}
      as={tag}
    >
      {children}
    </TypographyStyle>
  );
};
