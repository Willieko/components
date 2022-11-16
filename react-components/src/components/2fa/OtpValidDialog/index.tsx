/*
 * @Author: GWY
 * @Date: 2022-09-23 11:17:36
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-15 18:57:58
 * @Description: OTP安全校验弹窗
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Input, Message } from '@ali/xconsole/ui';
// 样式
import publicStyle from '~/styles/index.scoped.less';
import style from './index.scoped.less';

// 国际化hooks
import { useTranslation } from 'react-i18next';

const OtpValidDialog = ({ show, onClose, onSuccess }) => {
  const { t } = useTranslation();

  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (show) {
      setOtp('');
    }
  }, [show])

  const handleCommit = () => {
    if (!otp) {
      Message.warning(t('idaas.message.react.OtpValidDialog.otp.empty.tips'))
      return
    }
    onSuccess(otp)
  }


  return (
    <Dialog
      title={t('idaas.message.react.OtpValidDialog.title')}
      visible={show}
      onOk={handleCommit}
      onCancel={onClose}
      onClose={onClose}
    >
      <div className={style.dialogContent}>
        <Message type="notice" className={publicStyle.mb12}>
          {t('idaas.message.react.OtpValidDialog.message.tips')}
        </Message>
        <Input
          htmlType={'otp'}
          style={{ width: '100%' }}
          placeholder={t('idaas.message.react.OtpValidDialog.otp.placeholder')}
          value={otp}
          onChange={value => {
            setOtp(value);
          }}
        />
        <p className={publicStyle.color888}>
          {t('idaas.message.react.OtpValidDialog.otp.help')}
        </p>
      </div>
    </Dialog>
  );
};
export default OtpValidDialog;

OtpValidDialog.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  submit: PropTypes.func
}