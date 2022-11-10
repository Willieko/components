/*
 * @Author: GWY
 * @Date: 2022-11-09 17:01:39
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-10 10:27:16
 * @Description:
 */
declare module '*.scoped.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less';
