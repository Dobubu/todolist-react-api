import { toast, ToastOptions } from 'react-toastify';

const notifyStyle: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const notifySuccess = (message: string) => toast.success(message, notifyStyle);

export const notifyError = (message: string) => toast.error(message, notifyStyle);

export const notifyInfo = (message: string) => toast.info(message, notifyStyle);
