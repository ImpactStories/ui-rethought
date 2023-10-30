import React from "react";

export interface IButtonComponent {
  children: React.ReactNode;
  variant?: {
    style: "primary" | "secondary" | "tertiary";
    isGhost?: boolean;
    hasLinkStyle?: boolean;
  };
  visualDetails?: {
    size?: "xs" | "s" | "m" | "l" | "xl";
    isFullWidth?: boolean;
    isDisabled?: boolean;
    icon?: {
      id: string;
      isRightAligned?: boolean;
    };
    hasTextWrap?: boolean;
  };
  state?: {
    isDisabled?: boolean;
    isLoading?: boolean;
  };
  classNames?: {
    root?: string;
  };
  actions?: {
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
}

export const Button: React.FC<IButtonComponent> = ({ children }) => {
  return <button>
    {children}
  </button>;
};
