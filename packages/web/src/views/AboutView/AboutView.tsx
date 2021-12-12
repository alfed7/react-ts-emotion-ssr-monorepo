import { Fragment } from "react";
import HelmetHead from "../../components/HelmetHead";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Fragment>
      <HelmetHead title="About page" />
      <h1>About</h1>
      <Link to="/">Home</Link>
    </Fragment>
  );
};

export default { component: About };
