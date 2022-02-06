import { AppBar } from '@retesm/core';

const Footer = (props: IFooterProps) => {

  return (
    <AppBar>
      <a
        href="https://github.com/alfed7/react-ts-emotion-ssr-monorepo"
        target="_blank"
      >
        React SSR Typescript Emotion Monorepo Template
        &copy;{' '}
        2022
      </a>
    </AppBar>
  );
};

export interface IFooterProps {
};

export default Footer;
