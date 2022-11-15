/*
 * @Author: GWY
 * @Date: 2022-11-09 11:52:18
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 11:45:26
 * @Description:
 */
const path = require('path');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = {
  stories: ['../src/components/common/**/*.story.@(js|jsx|ts|tsx)', '../src/components/idp4/**/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
  framework: '@storybook/vue',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: lessRegex,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: lessModuleRegex,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      }
    );
    // config.output = {
    //   ...config.output,
    //   path: path.resolve(__dirname, '../build/storybook-static'),
    // };
    config.resolve.alias = {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    };
    config.resolve.extensions = ['.json', '.js', '.jsx', '.vue'];

    // Return the altered config
    return config;
  },
};
