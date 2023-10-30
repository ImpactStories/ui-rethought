import { ISpacingStyleProps } from "../../styled-components/base";
import { LinkStyle } from "./link.style";
import React from "react";

export interface ILinkComponent {
  children: React.ReactNode;
}

export const Link: React.FC<ILinkComponent> = ({ children }) => {
  return <a>{children}</a>;
};
