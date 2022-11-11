/*
 * @Author: GWY
 * @Date: 2022-11-09 11:52:18
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 16:39:23
 * @Description:
 */
import '@/language/zh-CN-AL.js'
import '@/language/en-US-AL.js'
import '@/utils/i18nInit';
import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { i18n } from '@/utils/idaas-utils';

Vue.use(ViewUI);

window.VM = new Vue({
  i18n,
});

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
