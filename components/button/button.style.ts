import styled from "styled-components";
import { SpacingStyle } from "../../styled-components/base";


export const StyledButton = styled(SpacingStyle)<{ $variant: any, $visualDetails: any }>`
    /* font: ${props => props.$variant.style}; */
    background: red;
    display: inline-flex;
    cursor: pointer;
    padding: 8px 12px;

    &:hover {
        background: blue;
    }
`;
