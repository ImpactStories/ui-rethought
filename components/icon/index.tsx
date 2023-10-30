import React from "react";
import { StyledIcon } from "./icon.style";
import files, { TIconID } from "./importFiles";

export interface IIconComponent {
  id: TIconID;
}

export const Icon: React.FC<IIconComponent> = ({ id }) => {
const Icon = files[id];

  return (
    <StyledIcon>
        <Icon />
    </StyledIcon>
  );
};
