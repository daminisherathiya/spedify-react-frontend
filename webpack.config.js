const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const opn = require("opn"); // Import the 'opn' package
// const publicPath = '/template3/';

const publicPath = "/";
// const publicPath = '/template-reactjs/';
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: publicPath, // base path where referenced files will be look for
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3000,
    historyApiFallback: true,
    open: true, // Automatically open the browser
    onAfterSetupMiddleware() {
      // Open the browser after the dev server is up and running
      // const open = require('open');
      opn(`http://localhost:${this.port}`);
      // opn(`http://localhost:${this.port}/template3/`);
    },
  },

  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "",
      publicPath: "/template-reactjs/",
      //  publicPath : '/template3/'
    }),
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // base path where to send compiled assets
    publicPath: publicPath, // base path where referenced files will be look for
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // config for sass compilation
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.mp3$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.png",
    }),
    new MiniCssExtractPlugin({
      // plugin for controlling how compiled css will be outputted and named
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "css/*.*",
        "js/*.*",
        "fonts/*.*",
        "images/*.*",
      ],
    }),
    new webpack.ProvidePlugin({
      //To automatically load jquery
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
