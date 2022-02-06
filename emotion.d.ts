import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      primaryFg: string;
      accent: string;
      accentFg: string;
      [key: string]: string;
    };
  }
}
