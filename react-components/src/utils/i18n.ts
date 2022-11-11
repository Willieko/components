/*
 * @Author: GWY
 * @Date: 2022-07-18 11:07:07
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 18:01:22
 * @Description:
 */
import i18n from 'i18next';
import enUsTrans from '../language/en.json';
import zhCnTrans from '../language/zh.json';
import { initReactI18next } from 'react-i18next';
// const enUsTrans = require('./language/en.json');
// const zhCnTrans = require('./language/zh.json');

// 存储 LocalStorage
const setLocal = (name, value) => {
  if (typeof value === 'string') {
    localStorage.setItem(name, value);
  } else {
    localStorage.setItem(name, JSON.stringify(value));
  }
};
// 获取 Object LocalStorage
export const getObjLocal = (name) => {
  const objStr = localStorage.getItem(name);
  return objStr ? JSON.parse(objStr) : {};
};

const langurage: any = getObjLocal('lang');
if (!langurage?.value) {
  const systemLang = window?.navigator?.language;
  if (systemLang.includes('zh')) {
    setLocal('lang', {
      label: '中文',
      value: 'zh',
    });
  } else {
    setLocal('lang', {
      label: 'English',
      value: 'en',
    });
  }
  window.location.reload();
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enUsTrans,
    },
    zh: {
      translation: zhCnTrans,
    },
  },
  //默认语言
  fallbackLng: getObjLocal('lang')?.value || 'zh',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
window['i18n'] = i18n;

export default i18n;
