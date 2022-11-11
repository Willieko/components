/*
 * @Author: GWY
 * @Date: 2022-11-09 11:59:45
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 15:38:24
 * @Description:
 */
import { Meta } from '@storybook/vue';
import ClickCopy from './index.vue';

export default {
  title: 'vue-components/ClickCopy',
  component: ClickCopy,
  argTypes: {
    content: {
      description: '需要被复制的内容',
      defaultValue: '这段话会被复制',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export const ClickCopyTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClickCopy },
  template: '<ClickCopy v-bind="$props" />',
});
ClickCopyTemplate.storyName = 'ClickCopy';
