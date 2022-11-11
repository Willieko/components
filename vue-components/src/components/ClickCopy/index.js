/*
 * @Author: GWY
 * @Date: 2022-11-09 10:18:56
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 10:19:03
 * @Description:
 */
import Vue from 'vue'
import ClickCopy from './index.vue';

ClickCopy.install = function(Vue) {
  Vue.component(ClickCopy.name, ClickCopy);
};
export default ClickCopy;
