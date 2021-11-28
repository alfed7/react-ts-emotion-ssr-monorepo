import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from 'eslint-webpack-plugin';

interface IEnvArguments {
  WEBPACK_SERVE: boolean;
}
interface IStartArgs {
  mode: string;
}
type ConfigurationBuilder = (
  env: IEnvArguments,
  startArgs: IStartArgs
) => webpack.Configuration;

const config: ConfigurationBuilder = (
  env: IEnvArguments,
  startArgs: IStartArgs
) => {
  const isDevelopment = startArgs.mode === "development";
  console.log(isDevelopment);
  return {
    entry: "./src/index.tsx",
    devtool: isDevelopment ? "eval-source-map" : false,
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
          type: "asset/resource",
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/assets/index.html" }),
      new ESLintPlugin()
    ],
    devServer: {
      static: path.join(__dirname, "build"),
      compress: true,
      port: 4000,
    },
  };
};

export default config;
