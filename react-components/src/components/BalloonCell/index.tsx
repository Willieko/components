/* eslint react/prop-types: 0 */
/*
 * @Author: GWY
 * @Date: 2022-07-14 16:11:09
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 18:03:13
 * @Description:table中的气泡组件，常用于备注/描述等字段
 * * 参数说明
 * content: 需要展示的内容，如果为空则会展示 --，并且不显示气泡
 * width: 触发元素的宽度，默认为100，溢出会显示省略号
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Balloon } from '@ali/xconsole/ui';
// 样式
import style from './index.scoped.less';
import { useTranslation } from 'react-i18next';

const BalloonCell: any = ({ content, width = 100, align = 'l' }) => {
  const { t } = useTranslation();
  const alignTemp: any = align

  useEffect(() => {
    console.log(t('2fa.message.common.operation.changePwd.text'), '=====');

  }, [])

  return (
    <>
      {content ? (
        <Balloon
          align={alignTemp}
          trigger={
            <p className={style.BalloonCell} style={{ width: width + 'px' }}>
              {content}{' '}
            </p>
          }
          alignEdge
          style={{ maxWidth: '300px' }}
        >
          <div>{content}</div>
        </Balloon>
      ) : (
        '--'
      )}
    </>
  );
};
export default BalloonCell;

BalloonCell.propTypes = {
  content: PropTypes.string,
  width: PropTypes.number,
  align: PropTypes.string
}