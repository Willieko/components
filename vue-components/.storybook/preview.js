/*
 * @Author: GWY
 * @Date: 2022-11-09 11:52:18
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 17:49:24
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

// 全局装饰器
export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="display:flex;justifyContent:center;padding: 80px 0"><story /></div>',
  }),
];
