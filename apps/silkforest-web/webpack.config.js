// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js", // Output filename with content hashing in production
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/", // Public URL of the output directory when referenced in a browser
    clean: true, // Clean the output directory before emit
  },
  mode: isDevelopment ? "development" : "production", // Mode configuration
  devtool: isDevelopment ? "cheap-module-source-map" : "source-map", // Source maps for debugging
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // File extensions to resolve
    alias: {
      "@silkforest/core": path.resolve(__dirname, "../../packages/core/src"),
      "@silkforest/audioengine": path.resolve(
        __dirname,
        "../../packages/audioengine/src"
      ),
    },
    symlinks: true, // Follow symlinks to ensure proper module resolution in monorepo
  },
  module: {
    rules: [
      // Rule for TypeScript and JavaScript files
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "../../packages"), // Include your packages
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // Presets for compiling modern JavaScript, React JSX, and TypeScript
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                // Enable React Refresh plugin in development mode
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
              cacheDirectory: false,
            },
          },
        ],
      },
      // Rule for CSS files with Tailwind CSS and PostCSS
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Translates CSS into CommonJS
          "postcss-loader", // Processes CSS with PostCSS (including Tailwind CSS)
        ],
      },
      // Rule for image and font assets
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        type: "asset/resource", // Emits a separate file and exports the URL
      },
      // Add more rules here if needed (e.g., for handling other file types)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // HTML template to use
    }),
    // Add React Refresh plugin in development mode
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean), // Filters out false values (e.g., the plugin in production)
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the 'public' directory
    },
    historyApiFallback: true, // Enables support for history API fallback (useful for React Router)
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true, // Enables Hot Module Replacement
    open: true, // Automatically opens the app in the browser
    port: 3000, // You can specify the port if needed
    watchFiles: [
      path.resolve(__dirname, "src/**/*"),
      path.resolve(__dirname, "../../packages/**/*"), // Watch external packages
    ],
  },
  experiments: {
    asyncWebAssembly: true, // Enable WebAssembly support if needed
  },
};
