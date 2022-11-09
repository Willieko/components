/*
 * @Author: GWY
 * @Date: 2022-11-09 11:52:18
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 15:14:44
 * @Description:
 */
import Vue from 'vue';
import ViewUI from 'view-design';
// import WrapperDecorator from './wrapperDecorator';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

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
