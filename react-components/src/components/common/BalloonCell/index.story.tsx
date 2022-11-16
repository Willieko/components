/*
 * @Author: GWY
 * @Date: 2022-11-03 09:53:43
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-16 14:12:32
 * @Description: 
 */
import React from 'react';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';
import BalloonCell from './index';

export default {
  title: 'Common/BalloonCell',
  component: BalloonCell,
  argTypes: {
    content: {
      description: '文本内容',
      defaultValue: '我是一段很长很长很长的描述信息。',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '' }
      }
    },
    width: {
      description: '显示长度，超出该长度会被省略，最小值为100',
      defaultValue: 100,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: 100 }
      }
    },
    align: {
      // type: { required: false } as any,
      description: '浮层的位置',
      defaultValue: 'l',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'l' }
      }
    },
  },
  parameters: {
    componentSubtitle: '长文本的显示处理，常用于表格的备注/描述等文字内容较长的字段',
    docs: {
      source: { code: '<BalloonCell content="我是一段很长很长很长的描述信息。" />' },
    },
  },
} as Meta;

export const BalloonCellTemplate: ComponentStory<typeof BalloonCell> = (args) => <BalloonCell {...args} />
BalloonCellTemplate.storyName = 'BalloonCell'