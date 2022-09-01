import { Dispatch, SetStateAction } from 'react';

import { notifyError } from './useNotify';
import authService from './useAuth';
import { apiSignOut } from '../api/auth';

export const handleErrorAsync = (
  cb: () => Promise<any>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  return () =>
    cb()
      .catch(async (e: any) => {
        if (e.message === '未授權' || !e) {
          // await apiSignOut(); // token 已過期 導致 api 有問題

          authService.clearToken();
          window.location.href =
            window.location.hostname === 'localhost'
              ? '/'
              : 'https://dobubu.github.io/todolist-react-api/#/';
          notifyError(`${e.message || '憑證過期'}，自動登出成功`);
        } else if (e.message && e.error) {
          notifyError(`${e.message}：${e.error.join('、')}`);
        } else {
          notifyError(e.message);
        }
      })
      .finally(() => setLoading && setLoading(false));
};
