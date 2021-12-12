import { Fragment } from "react";
import HelmetHead from "../../components/HelmetHead";
import { Link } from "react-router-dom";
import { css } from '@emotion/react'

const color = 'white'

const Home = () => {
  return (
    <Fragment>
      <HelmetHead title="Home page" />
      <h1>Home</h1>
      <Link to="/about">About</Link>

      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    </Fragment>
  );
};

export default { component: Home };
