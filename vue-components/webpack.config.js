/*
 * @Author: GWY
 * @Date: 2022-11-11 10:30:59
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-14 17:06:24
 * @Description:
 */
const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.modules\.less$/;

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'vueComponents',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    usedExports: true, //哪些导出的模块被使用了，再做打包
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          //options额外的配置，比如资源名称
          options: {
            //placeholder 占位符 [name]老资源模块的名称 [ext]老资源模块的后缀
            name: '[name]_[hash].[ext]',
            //打包后存放的位置
            outputPath: 'font/',
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        //use使用一个loader可以用对象，字符串，两个loader需要用数组
        use: {
          loader: 'file-loader',
          //options额外的配置，比如资源名称
          options: {
            //placeholder 占位符 [name]老资源模块的名称 [ext]老资源模块的后缀
            name: '[name]_[hash].[ext]',
            //打包后存放的位置
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        // exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        // include: path.resolve(__dirname, './src'),
        // exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.json', '.js', '.jsx', '.vue'],
  },
  plugins: [
    new CleanWebpackPlugin({
      //打包之前清理一次，删掉上次打包生成的lib文件夹
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './lib')],
    }),
    new VueLoaderPlugin(),
  ],
  watchOptions: {
    //不监听的node_modules目录下的文件
    ignored: /node_nodules/,
  },
};
