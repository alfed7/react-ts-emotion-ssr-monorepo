import type { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Outlet } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import HelmetHead from "./components/HelmetHead";
import AppStyles from "./AppStyles";

 //context={staticContext}>
export const App: FC = () => {
  return (
    <HelmetProvider>
      {<HelmetHead title="React Emotion SSR Workspace 1" />}
      <AppStyles/>
      <ThemeProvider theme={theme}><Outlet/></ThemeProvider>
    </HelmetProvider>
  );
};
function loadData() {
  //return dispatch(someActions.doAction());
}
export default {
  loadData,
  component: App,
};
