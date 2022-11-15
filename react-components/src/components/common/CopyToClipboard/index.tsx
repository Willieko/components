/* eslint react/prop-types: 0 */
/*
 * @Author: YXS
 * @Date: 2021-09-14 09:59:00
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 14:57:46
 * @Description: 粘贴到剪切板
 * ------参数说明------
 * text：提示文字
 * icon：图标
 * btnType：按钮类型
 * copyText：要复制的文字
 * successTips：复制成功的提示文案
 * failTips：复制失败的提示文案
 * copyCallback：复制后的回调，返回 true（成功），false（失败）
 * balloon：是否展示气泡
 * balloonText：气泡提示
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Message, Balloon } from '@ali/xconsole/ui';
import copy from 'copy-to-clipboard';
import style from './index.scoped.less'
import { useTranslation } from 'react-i18next';

const CopyToClipboard = props => {
  const { t } = useTranslation();

  const {
    text = t('idaas.message.react.CopyToClipboard.copy.text'),
    icon = 'copy',
    btnType = 'primary',
    copyText,
    successTips = t('idaas.message.react.CopyToClipboard.copy.success'),
    failTips = t('idaas.message.react.CopyToClipboard.copy.fail'),
    copyCallback,
    balloon = false,
    balloonText = '',
  } = props;

  const tempType: any = btnType;
  const handleCopy = () => {
    if (copyText && copy(copyText)) {
      Message.success(successTips);
      setTimeout(() => {
        copyCallback(true);
      }, 300);
    } else {
      Message.error(failTips);
      setTimeout(() => {
        copyCallback(false);
      }, 300);
    }
  };

  const copyButton = (
    <Button type={tempType} text onClick={handleCopy} className={style.ml5}>
      {icon.length > 0 && <Icon type={icon} />}
      {text}
    </Button>
  );

  return (
    <>
      {balloon ? (
        <Balloon trigger={copyButton} triggerType="hover" align="t" closable={false}>
          {balloonText}
        </Balloon>
      ) : (
        <div>{copyButton}</div>
      )}
    </>
  );
};

CopyToClipboard.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  btnType: PropTypes.string,
  copyText: PropTypes.string,
  successTips: PropTypes.string,
  failTips: PropTypes.string,
  copyCallback: PropTypes.func,
  balloon: PropTypes.bool,
  balloonText: PropTypes.string,
};

export default CopyToClipboard;
