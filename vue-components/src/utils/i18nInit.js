/*
 * @Author: GWY
 * @Date: 2022-11-11 15:43:15
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 16:16:10
 * @Description:
 */
import { i18nInit } from '@/utils/idaas-utils';
import Vue from 'vue';
import iView from 'view-design';
import VueI18n from 'vue-i18n';
// 语言包载入
import zhLocale from 'view-design/dist/locale/zh-CN';
import enLocale from 'view-design/dist/locale/en-US';

// 初始化i18n
i18nInit(Vue, VueI18n, iView, zhLocale, enLocale);
