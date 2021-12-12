import { Helmet } from 'react-helmet-async';

const HelmetHead = (props: IHelmetHeadProps) => {
  return (
    <Helmet>
      <meta
        content={props.title}
        property="og:title"
      />
      <title>{props.title}</title>
    </Helmet>
  );
};

export interface IHelmetHeadProps {
  title: string
};

export default HelmetHead;
