/*
 * @Author: GWY
 * @Date: 2022-11-10 18:37:31
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-16 11:33:34
 * @Description:
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const lessRegex = /\.less$/;
const lessModuleRegex = /\.scoped\.less$/;

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'react-components-ids',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
        exclude: /node-modules/,
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
            outputPath: 'img/',
          },
        },
      },
      {
        test: lessRegex,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // include: path.resolve(__dirname, './'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      //打包之前清理一次，删掉上次打包生成的lib文件夹
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './lib')],
    }),
  ],
};
