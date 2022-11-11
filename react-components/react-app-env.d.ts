/*
 * @Author: GWY
 * @Date: 2022-11-09 17:01:39
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 17:59:55
 * @Description:
 */
declare module '*.scoped.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.json';

// declare module '*.json' {
//   const value: any;
//   export default value;
// }
