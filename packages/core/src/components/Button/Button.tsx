import type { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import { useTheme, Theme } from "@emotion/react";
import { resolveColor } from "../../theme";
import { colord } from 'colord';

//import styled from '@emotion/styled'

// const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `

export interface ButtonProps {
  children: ReactNode;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ color, backgroundColor, children }) => {
  const theme: Theme = useTheme();
  const bg = resolveColor(theme, backgroundColor, 'primary');
  const fg = resolveColor(theme, color, 'primaryFg');
  const fgHover = colord(fg).darken(0.1).toHex();
  return (
    <button
      css={css`
        padding: 1em;
        background-color: ${bg};
        font-size: 1.2em;
        border: 0;
        border-radius: 5px;
        display: flex;
        overflow: hidden;
        margin: 10px;
        height: 3em;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        flex: 0 0 160px;
        color: ${fg};
        fill: ${fg};
        &:hover {
          color: ${fgHover};
          fill: ${fgHover};
        }
      `}
    >
      {children}
    </button>
  );
};
export default Button;
