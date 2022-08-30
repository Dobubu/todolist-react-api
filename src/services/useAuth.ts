import { StorageType } from './type';
import { SignUpReq, apiSignUp, LoginReq, apiLogin, apiSignOut } from '../api/auth';

const setToken = (token: string) => localStorage.setItem(StorageType.ACCESSTOKEN, token);

const getToken = () => localStorage.getItem(StorageType.ACCESSTOKEN);

const setUser = (name: string) => localStorage.setItem(StorageType.USER, name);

const getUser = () => localStorage.getItem(StorageType.USER);

const clearToken = () => localStorage.clear();

const signUp = (user: SignUpReq) => apiSignUp(user);

const login = (user: LoginReq) => apiLogin(user);

const signOut = () => apiSignOut();

const authService = {
  setToken,
  getToken,
  setUser,
  getUser,
  clearToken,
  signUp,
  login,
  signOut
};

export default authService;
