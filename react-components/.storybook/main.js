/*
 * @Author: GWY
 * @Date: 2022-11-09 16:43:52
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 17:52:13
 * @Description:
 */
const path = require('path');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.modules\.less$/;
module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
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
      }
      // {
      //   test: /\.(eot|ttf|svg|woff)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // 打包后的字体图标放在 icon 目录下
      //       // 文件名跟格式和打包前保持一致
      //       name: 'icon/[name].[ext]',
      //     },
      //   },
      // },
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
    config.resolve.extensions.push('.json');

    // Return the altered config
    return config;
  },
};
