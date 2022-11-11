/*
 * @Author: GWY
 * @Date: 2022-11-09 11:52:18
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 13:20:37
 * @Description:
 */
const path = require('path');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = {
  stories: ['../components/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/vue',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: lessRegex,
        loader: 'style-loader!css-loader!less-loader',
        // use: [
        //   'style-loader',
        //   {
        //     loader: require.resolve('css-loader'),
        //     options: {
        //       modules: true,
        //       esModule: false,
        //     },
        //   },
        //   {
        //     loader: require.resolve('less-loader'), // compiles Less to LESS
        //     options: {
        //       modules: true,
        //     },
        //   },
        // ],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        loader: 'style-loader!css-loader!less-loader',
        // use: [
        //   require.resolve('style-loader'),
        //   {
        //     loader: require.resolve('css-loader'),
        //     options: {
        //       modules: true,
        //     },
        //   },
        //   // {
        //   //   loader: require.resolve('postcss-loader'),
        //   //   options: {
        //   //     // 如果没有options这个选项将会报错 No PostCSS Config found
        //   //     sourceMap: true,
        //   //   },
        //   // },
        //   {
        //     loader: require.resolve('less-loader'), // compiles Less to LESS
        //     options: {
        //       modules: true,
        //     },
        //   },
        // ],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      }
    );
    // config.output = {
    //   ...config.output,
    //   path: path.resolve(__dirname, '../build/storybook-static'),
    // };
    // config.resolve.alias = {
    //   // Support React Native Web
    //   // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    //   '~': path.resolve(__dirname, '../src/'),
    // };
    config.resolve.extensions = ['.json', '.js', '.jsx', '.vue'];

    // Return the altered config
    return config;
  },
};
