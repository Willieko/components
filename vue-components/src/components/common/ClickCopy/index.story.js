/*
 * @Author: GWY
 * @Date: 2022-11-09 11:59:45
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 11:41:34
 * @Description:
 */
import { Meta } from '@storybook/vue';
import ClickCopy from './index.vue';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

export default {
  title: 'COMMON/ClickCopy',
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
  parameters: {
    componentSubtitle: '用于文本复制的组件。',
    docs: {
      source: { code: '<ClickCopy content="" />' },
    },
  },
};

export const ClickCopyTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClickCopy },
  template: '<ClickCopy v-bind="$props" />',
});
ClickCopyTemplate.storyName = 'ClickCopy';
