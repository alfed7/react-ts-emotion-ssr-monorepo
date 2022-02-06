import { Fragment } from "react";
import HelmetHead from "../../components/HelmetHead";
import { Link } from "react-router-dom";
import { css } from '@emotion/react';
import { Button } from '@retesm/core';
//import GrapesFruit from '../../assets/grapes-fruit.svg';
import Strawberry from '../../assets/strawberry.svg';

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

      <Button>Test Button</Button>

      <Button backgroundColor="accent"><Strawberry width="32" /></Button>
    </Fragment>
  );
};

export default { component: Home };
