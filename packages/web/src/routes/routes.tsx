import App from "../App";
import { HomeView, AboutView } from "../views";

export default [
  {
    ...App,
    path: "/",
    children: [
      {
        ...HomeView,
        //layout: LandLayout,
        path: "/",
      },
      {
        ...AboutView,
        //layout: LandLayout,
        path: "/about",
      },
    ],
  },
];
