const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.tsx"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  watchOptions: {
    poll: true,
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
