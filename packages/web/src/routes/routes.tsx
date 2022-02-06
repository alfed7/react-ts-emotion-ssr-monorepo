import App from "../App";
import { HomeView, AboutView } from "../views";
import { LandingLayout } from '../layouts';

export default [
  {
    ...App,
    path: "/",
    children: [
      {
        ...HomeView,
        layout: LandingLayout,
        path: "/",
      },
      {
        ...AboutView,
        layout: LandingLayout,
        path: "/about",
      },
    ],
  },
];
