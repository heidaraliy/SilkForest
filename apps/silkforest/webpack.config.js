const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// only require React Refresh plugin in development.
const ReactRefreshWebpackPlugin =
  process.env.NODE_ENV !== "production"
    ? require("@pmmmwh/react-refresh-webpack-plugin")
    : null;

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "static/js/[name].[contenthash].js",
    chunkFilename: "static/js/[name].[contenthash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  mode: "production", // always use production mode for Vercel.
  devtool: "source-map",
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
              // no React Refresh in production.
              plugins: [],
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
    new CompressionPlugin(),
  ],
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
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor.${packageName.replace("@", "")}`;
          },
        },
      },
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

// only add development specific configurations if not in production.
if (isDevelopment) {
  config.mode = "development";
  config.devtool = "cheap-module-source-map";
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.module.rules[0].use[0].options.plugins = [
    require.resolve("react-refresh/babel"),
  ];
}

module.exports = config;
