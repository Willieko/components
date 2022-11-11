/*
 * @Author: GWY
 * @Date: 2022-11-09 11:59:45
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 15:15:43
 * @Description:
 */
import { Meta } from '@storybook/vue';
import Spin from './index.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'vue-components/Spin',
  component: Spin,
  argTypes: {
    isLoading: {
      description: '是否展示loading',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loadingTips: {
      description: '是否展示loading时候的文字提示',
      defaultValue: '正在努力加载中，请稍候...',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '' },
      },
    }
  },
};

export const SpinTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Spin },
  template: '<Spin v-bind="$props" />',
});
SpinTemplate.storyName = 'Spin';
