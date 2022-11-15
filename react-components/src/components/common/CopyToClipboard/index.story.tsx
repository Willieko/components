/*
 * @Author: GWY
 * @Date: 2022-11-03 09:53:43
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 15:45:50
 * @Description: 
 */
import React from 'react';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';
import CopyToClipboard from './index';

export default {
  title: 'Common/CopyToClipboard',
  component: CopyToClipboard,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      description: '显示的操作文本',
      defaultValue: '复制',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '复制' }
      }
    },
    copyText: {
      type: { required: true } as any,
      control: {
        type: 'text',
      },
      description: '需要复制的内容',
      defaultValue: '我是负责的内容',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    btnType: {
      control: {
        type: 'text',
      },
      description: '按钮的风格样式,可选值:primary, secondary,normal',
      defaultValue: 'primary',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'primary' }
      }
    },
    successTips: {
      control: {
        type: 'text',
      },
      description: '复制成功后的提示',
      defaultValue: '复制成功。',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '复制成功。' }
      }
    },
    failTips: {
      control: {
        type: 'text',
      },
      description: '复制失败后的提示',
      defaultValue: '复制失败。',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '复制失败。' }
      }
    },
    balloon: {
      control: {
        type: 'boolean',
      },
      description: '是否展示鼠标移入的提示',
      defaultValue: false,
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: false }
      }
    },
    balloonText: {
      control: {
        type: 'text',
      },
      description: '鼠标移入显示的浮层的提示',
      defaultValue: '提示内容',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '提示内容' }
      }
    }
  },
  parameters: {
    componentSubtitle: '用于文本内容的复制',
    docs: {
      source: { code: '<CopyToClipboard copyText="我是需要复制的内容。" />' },
    },
  },
} as Meta;

export const CopyToClipboardTemplate: ComponentStory<typeof CopyToClipboard> = (args) => <CopyToClipboard {...args} />
CopyToClipboardTemplate.storyName = 'CopyToClipboard'