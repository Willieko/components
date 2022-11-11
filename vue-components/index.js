/*
 * @Author: GWY
 * @Date: 2022-11-09 10:14:41
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 13:14:58
 * @Description:
 */
import Spin from './components/Spin/index';
import ClickCopy from './components/ClickCopy/index';
import { version } from './package.json';

// import "./MyButton/index.scss";
// import "./MyInput/index.scss";
// import "./css/first-screen.chunk.css"
// import "./css/index.chunk.css"

const components = [Spin];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { Spin, install };
// export default { version, install };
