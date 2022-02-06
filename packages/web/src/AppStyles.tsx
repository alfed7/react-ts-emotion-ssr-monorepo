import { Global, css } from '@emotion/react'

const AppStyles = () => (
  <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          height: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          font-family: "Inter", sans-serif;
          background-color: #f4f6f8;
          height: 100%;
        }
        #app {
          height: 100%;
        }
      `}
    />
)

export default AppStyles;
