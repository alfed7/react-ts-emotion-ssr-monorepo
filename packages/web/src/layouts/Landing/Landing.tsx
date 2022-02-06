import type { ReactChild, ReactChildren } from "react";
import { css } from '@emotion/react';
import { Footer } from "../common/components";

export interface ILandingProps {
  children: ReactChild | ReactChildren
}

const Landing = (props: ILandingProps) => {

  return (
    <div css={css`
      height: 100%;
      display: flex;
      flex-direction: column;
    `}>
      <div css={css`
        flex: 1;
      `}>{props.children}</div>
      <Footer/>
    </div>
  );
};

export default Landing;
