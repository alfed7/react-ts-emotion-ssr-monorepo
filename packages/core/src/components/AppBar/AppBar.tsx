import { css } from "@emotion/react";
import type { ReactChild, ReactChildren, FC } from "react";
import { useTheme, Theme } from "@emotion/react";
import { resolveColor } from "theme";

export interface AppBarProps {
  children: ReactChild | ReactChildren;
  /**
   * What background color to use
   */
   backgroundColor?: string;
   color?: string;
};

export const AppBar: FC<AppBarProps> = ({children, color, backgroundColor}) => {
  const theme: Theme = useTheme();
  const bg = resolveColor(theme, backgroundColor, 'primary');
  const fg = resolveColor(theme, color, 'primaryFg');

  return (<div css={css`
    background-color: ${bg};
    text-align: center;
    padding: 1em;
    a {
      text-decoration: none;
      color: ${fg};
    }
  `}>
    {children}
  </div>)
}
export default AppBar;
