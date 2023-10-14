const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
var IconfontWebpackPlugin = require('iconfont-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
        {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', exclude: /node_modules/},
        {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: (loader) => {
                return {
                  plugins: [
                    new IconfontWebpackPlugin({
                      resolve: loader.resolve
                    })
                  ]
                };
              }
            }
          }
        ]}
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({title: "React App"}),
    new ESLintPlugin({extensions: ['js', 'jsx', 'ts', 'tsx']})
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000
  }
};
