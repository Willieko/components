/*
 * @Author: GWY
 * @Date: 2022-11-10 18:37:31
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 11:38:22
 * @Description:
 */
const path = require('path');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.modules\.less$/;

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'reactComponents',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
      {
        test: lessRegex,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to LESS
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to LESS
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
