import React from "react";
import { StyledButton } from "./button.style";
import { Icon } from "../icon";

export interface IButtonComponent {
  children: React.ReactNode;
  variant?: {
    // configurable styles
    style: "primary" | "secondary" | "tertiary";
    // configurable styles
    isGhost?: boolean;
    // configurable styles
    hasLinkStyle?: boolean;
  };
  visualDetails?: {
    // configurable styles
    size?: "xs" | "s" | "m" | "l" | "xl";
    // fixed style
    isFullWidth?: boolean;
    // fixed style
    icon?: {
      id: string;
      isRightAligned?: boolean;
    };
    // fixed style
    hasTextWrap?: boolean;
  };
  state?: {
    // configurable styles
    isDisabled?: boolean;
    // configurable styles
    isLoading?: boolean;
  };
  classNames?: {
    root?: string;
  };
  // fixed actions
  actions?: {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
}

export const Button: React.FC<IButtonComponent> = ({
  children,
  variant,
  visualDetails,
  actions
}) => {
  return (
    <StyledButton
      // styles
      $variant={variant}
      $visualDetails={visualDetails}

      // actions
      onClick={actions?.onClick}
      onMouseEnter={actions?.onMouseEnter}
      onMouseLeave={actions?.onMouseLeave}
    >
      <Icon id="download" /> {children}
    </StyledButton>
  );
};
