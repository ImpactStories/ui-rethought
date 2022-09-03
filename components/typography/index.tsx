import { ISpacingStyleProps } from "../../styled-components/base";
import { TypographyStyle } from "./typography.style";

interface ITypographyComponent extends ISpacingStyleProps {
  children: React.ReactNode;
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
    >
      {children}
    </TypographyStyle>
  );
};
