/*
 * @Author: GWY
 * @Date: 2022-11-09 16:43:52
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 17:00:04
 * @Description:
 */
import WrapperDecorator from './wrapperDecorator';
import '@alicloud/console-components/dist/wind.css';
import '@alicloud/console-components/dist/xconsole.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
