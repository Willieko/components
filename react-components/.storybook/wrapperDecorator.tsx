/*
 * @Author: GWY
 * @Date: 2022-11-04 14:22:34
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-08 09:59:31
 * @Description: 
 */
import React from 'react';

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '80px 0',
};

// 创建一个样式包裹的装饰器
const WrapperDecorator = (storyFn) => <div style={wrapperStyle}>{storyFn()}</div>;

export default WrapperDecorator;
