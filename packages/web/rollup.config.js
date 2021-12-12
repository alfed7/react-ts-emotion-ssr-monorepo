const pkg = require("./package.json");

import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const extensions = [".js", ".jsx", ".ts", ".tsx"];

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  "@babel\runtime"
];

// const makeExternalPredicate = externalArr => {
//   if (externalArr.length === 0) {
//     return () => false;
//   }
//   const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
//   return id => pattern.test(id);
// }

export default [
  {
    input: "./src/main.tsx",
    output: [
      {
        file: "build/main.js",
        format: "iife",
        name: "main",
        sourcemap: !production,
        // https://rollupjs.org/guide/en/#outputglobals
        globals: {},
      },
    ],
    //external,
    plugins: [
      resolve({
        extensions,
      }),
      commonjs(),
      // typescript({
      //   exclude: ["**/*.test.ts?(x)"],
      // }),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourceMaps: !production,
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      copy({
        targets: [{ src: "src/index.html", dest: "build" }],
        copyOnce: true
      }),
      production && terser(),
    ],
  },
  {
    input: "./src/index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: !production,
        // https://rollupjs.org/guide/en/#outputglobals
        globals: {},
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: !production,
        // https://rollupjs.org/guide/en/#outputglobals
        globals: {},
      },
    ],
    external,
    plugins: [
      // resolve({
      //   extensions,
      // }),
      commonjs(),
      typescript({
        exclude: ["**/*.test.ts?(x)"],
      }),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourceMaps: !production,
      }),
      production && terser(),
    ],
  },
];
