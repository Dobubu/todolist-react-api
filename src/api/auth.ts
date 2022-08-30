import TodoAPI from './api';

export interface SignUpReq {
  user: {
    nickname: string;
    email: string;
    password: string;
  };
}

export interface SignUpRes {
  message: string;
  email: string;
  nickname: string;
}

export interface LoginReq {
  user: {
    email: string;
    password: string;
  };
}

export const apiSignUp = async (payload: SignUpReq) =>
  await (
    await TodoAPI.post<SignUpRes>('/users', payload)
  ).data;

export const apiLogin = async (payload: LoginReq) => TodoAPI.post('/users/sign_in', payload);

export const apiSignOut = async () => TodoAPI.delete('/users/sign_out');
