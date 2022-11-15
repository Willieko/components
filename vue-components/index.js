/*
 * @Author: GWY
 * @Date: 2022-11-09 10:14:41
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 11:39:28
 * @Description:
 */

import '@/language/zh-CN-AL.js';
import '@/language/en-US-AL.js';
import '@/utils/i18nInit';
import Vue from 'vue';
import { i18n } from '@/utils/idaas-utils';
import 'view-design/dist/styles/iview.css';

// 通用组件
import ClickCopy from './src/components/common/ClickCopy/index';

// IDP4组件
import Spin from './src/components/IDP4/Spin/index';

window.VM = new Vue({
  i18n,
});

const components = [Spin, ClickCopy];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { Spin, ClickCopy, install };
// export default { version, install };
