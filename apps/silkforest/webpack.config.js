const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");

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
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CompressionPlugin(),
    new Dotenv(),
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
    usedExports: true,
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 20,
      minSize: 20000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
          priority: 40,
        },
        markdown: {
          test: /[\\/]node_modules[\\/](react-markdown|remark-*|rehype-*|micromark-*)[\\/]/,
          name: "markdown",
          chunks: "async",
          priority: 30,
        },
        charts: {
          test: /[\\/]node_modules[\\/](recharts|d3-*)[\\/]/,
          name: "charts",
          chunks: "async",
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 10,
        },
        animations: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: "animations",
          chunks: "async",
          priority: 25,
        },
        audio: {
          test: /[\\/]node_modules[\\/](lamejs|audiobuffer-to-wav)[\\/]/,
          name: "audio",
          chunks: "async",
          priority: 35,
        },
        routing: {
          test: /[\\/]node_modules[\\/]react-router-dom[\\/]/,
          name: "routing",
          chunks: "async",
          priority: 15,
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
