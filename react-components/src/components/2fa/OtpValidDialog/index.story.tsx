/*
 * @Author: GWY
 * @Date: 2022-11-03 09:53:43
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 15:52:38
 * @Description: 
 */
import React from 'react';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';
import OtpValidDialog from './index';


export default {
  title: '2fa/OtpValidDialog',
  component: OtpValidDialog,
  argTypes: {
    show: {
      type: { required: true } as any,
      control: {
        type: 'boolean',
      },
      description: '是否显示',
      defaultValue: true,
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    close: {
      control: {
        type: 'object',
      },
      description: '关闭的回调',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: '() => {}' }
      },
      defaultValue: () => { },
    },
    submit: {
      control: {
        type: 'object',
      },
      description: '确认的回调',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: '(otp) => {}', detail: '在确认的回调参数中，抛出输入的otp。' }
      },
      defaultValue: () => { },
    }
  },
  parameters: {
    componentSubtitle: '2fa的安全校验弹窗，常用于一些敏感操作前的otp码校验场景。',
    docs: {
      source: { code: '<OtpValidDialog show="" onClose="() => {}" onSuccess="(otp) => {}" />' },
    },
  },
} as Meta;
// } as ComponentMeta<typeof BalloonCell>;


export const OTPValidDialogTemplate: ComponentStory<typeof OtpValidDialog> = (args) => <OtpValidDialog {...args} />
OTPValidDialogTemplate.storyName = 'OTPValidDialog'