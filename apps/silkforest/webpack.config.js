const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@silkverb": path.resolve(__dirname, "../silkverb/src"),
      "@silkforest": path.resolve(__dirname, "./src"),
    },
    symlinks: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "../silkverb/src"),
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
              cacheDirectory: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/media/[name][hash][ext]",
        },
      },
      {
        test: /\.md$/,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    open: false,
    port: 3000,
    watchFiles: [path.resolve(__dirname, "src/**/*")],
  },
};
