const pkg = require("./package.json");

import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      exclude: ["**/*.test.ts?(x)"],
    }),
    babel({
      exclude: "node_modules/**",
      extensions: [".ts", ".tsx"],
      babelHelpers: "runtime",
    }),
    production && terser(),
  ],
};
