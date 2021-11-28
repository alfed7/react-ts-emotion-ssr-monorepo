import { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "./components";
import { theme } from "./theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>My React and TypeScript App!</h1>
        <Button>Test</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
