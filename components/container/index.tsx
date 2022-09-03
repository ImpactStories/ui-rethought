import { ISpacingStyleProps } from "../../styled-components/base";
import { ContainerStyle } from "./container.style";

interface IContainerComponent extends ISpacingStyleProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerComponent> = ({
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
    <ContainerStyle
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
    </ContainerStyle>
  );
};
