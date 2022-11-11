/*
 * @Author: GWY
 * @Date: 2022-11-03 09:53:43
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 17:36:25
 * @Description: 
 */
import React from 'react';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';
import BalloonCell from './index';

export default {
  title: 'react-components/BalloonCell',
  component: BalloonCell,
  argTypes: {
    content: {
      description: '展示内容',
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
      description: '显示长度，最小值为100',
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
} as Meta;

export const BalloonCellTemplate: ComponentStory<typeof BalloonCell> = (args) => <BalloonCell {...args} />
BalloonCellTemplate.storyName = 'BalloonCell'