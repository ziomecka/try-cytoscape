const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const PORT = 9000;

const { NODES_CNT = 1000, DOCUMENT_FRAG } = process.env;

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./src/index.html'),

    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODES_CNT: JSON.stringify(NODES_CNT),
        DOCUMENT_FRAG: JSON.stringify(DOCUMENT_FRAG),
      },
    }),
  ],
};
