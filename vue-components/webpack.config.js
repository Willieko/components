/*
 * @Author: GWY
 * @Date: 2022-11-11 10:30:59
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 13:22:23
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
        use: [{ loader: require.resolve('vue-loader') }],
      },
      {
        test: lessRegex,
        loader: 'style-loader!css-loader!less-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        loader: 'style-loader!css-loader!less-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.vue'],
  },
  plugins: [new VueLoaderPlugin()],
};
