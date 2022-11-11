/*
 * @Author: GWY
 * @Date: 2022-11-11 10:30:59
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 18:35:39
 * @Description:
 */
const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
console.log(VueLoaderPlugin, 'VueLoaderPlugin');
const lessRegex = /\.less$/;
const lessModuleRegex = /\.modules\.less$/;

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'vueComponents',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/,
      },
      {
        test: lessRegex,
        loader: 'style-loader!css-loader!less-loader',
        exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        loader: 'style-loader!css-loader!less-loader',
        // include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.json', '.js', '.jsx', '.vue'],
  },
  plugins: [new VueLoaderPlugin()],
};
