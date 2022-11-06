import pkg from "./package.json" assert { type: "json" };

import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
//import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import svgr from '@svgr/rollup';

const production = !process.env.ROLLUP_WATCH;
const extensions = [".js", ".jsx", ".ts", ".tsx"];
import alias from '@rollup/plugin-alias';
//import path from 'path';
import { fileURLToPath } from 'node:url'

//const projectRootDir = path.resolve(__dirname);

process.env.NODE_ENV = production ? 'production' : '';

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  "@babel\runtime"
];

export default [
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
      resolve({
        extensions,
      }),
      commonjs(),
      svgr(),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourceMaps: !production,
      }),
      alias({
        entries: [
          {
            find: 'components',
            replacement: fileURLToPath(new URL('src/components', import.meta.url)) //path.resolve(projectRootDir, 'src/components')
          },
          {
            find: 'theme',
            replacement: fileURLToPath(new URL('src/theme', import.meta.url)) //path.resolve(projectRootDir, 'src/theme')
          }
        ],
      }),
      production && terser(),
    ],
  },
];
