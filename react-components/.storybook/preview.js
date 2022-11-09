/*
 * @Author: GWY
 * @Date: 2022-11-09 16:43:52
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 17:49:46
 * @Description:
 */
import { addDecorator, configure } from '@storybook/react';
// import WrapperDecorator from './wrapperDecorator';
import '@alicloud/console-components/dist/wind.css';
import '@alicloud/console-components/dist/xconsole.css';

// 全局装饰器
// addDecorator(WrapperDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};

// 全局装饰器
export const decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 0',
      }}
    >
      <Story />
    </div>
  ),
];
