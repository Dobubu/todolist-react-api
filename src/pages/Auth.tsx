import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import {
  LoginPage,
  Container,
  Side,
  LogoImg,
  BgImg,
  FormControls,
  FormControlsTxt,
  FormControlsLabel,
  FormControlsInput,
  FormControlsBtnSubmit,
  FormControlsBtnLink,
  FormControlsErrorText
} from './AuthStyled';
import authService from '../services/useAuth';
import { notifySuccess } from '../services/useNotify';
import { handleErrorAsync } from '../services/useHandleMessage';
import { SignUpReq, LoginReq } from '../api/auth';
import Loading from '../components/Loading';

interface LoginOrSignProps {
  isLogin: boolean;
  setIsLogin: (o: boolean) => void;
  signUp: (o: SignUpReq) => void;
  login: (o: LoginReq) => void;
}

interface LoginForm {
  loginEmail: string;
  loginPassword: string;
}

interface SignUpForm {
  signUpEmail: string;
  signUpNickname: string;
  signUpPassword: string;
  signUpRePassword: string;
}

interface AuthForm extends LoginForm, SignUpForm {}

const LoginOrSign = ({ isLogin, setIsLogin, signUp, login }: LoginOrSignProps) => {
  const toggleLogin = () => setIsLogin(!isLogin);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthForm>();

  const onSubmit = (data: AuthForm) => {
    if (isLogin) {
      const { loginEmail: email, loginPassword: password } = data;
      return login({
        user: {
          email,
          password
        }
      });
    }
    const { signUpEmail: email, signUpNickname: nickname, signUpPassword: password } = data;

    return signUp({
      user: {
        email,
        nickname,
        password
      }
    });
  };

  if (isLogin) {
    return (
      <FormControls onSubmit={handleSubmit(onSubmit)}>
        <FormControlsTxt>最實用的線上代辦事項服務</FormControlsTxt>
        <FormControlsLabel>Email</FormControlsLabel>
        <FormControlsInput
          type="text"
          placeholder="請輸入 email"
          key="loginEmail"
          {...register('loginEmail', {
            required: {
              value: true,
              message: '請輸入資料內容!'
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: '格式有誤!'
            }
          })}></FormControlsInput>
        {errors.loginEmail && (
          <FormControlsErrorText>{errors.loginEmail.message}</FormControlsErrorText>
        )}
        <FormControlsLabel>密碼</FormControlsLabel>
        <FormControlsInput
          type="password"
          placeholder="請輸入密碼"
          key="loginPassword"
          {...register('loginPassword', {
            required: {
              value: true,
              message: '此欄位不可留空'
            },
            minLength: {
              value: 6,
              message: '密碼長度至少6位字元'
            }
          })}></FormControlsInput>
        {errors.loginPassword && (
          <FormControlsErrorText>{errors.loginPassword.message}</FormControlsErrorText>
        )}
        <FormControlsBtnSubmit type="submit" value="登入"></FormControlsBtnSubmit>
        <FormControlsBtnLink onClick={toggleLogin}>註冊帳號</FormControlsBtnLink>
      </FormControls>
    );
  }
  return (
    <FormControls onSubmit={handleSubmit(onSubmit)}>
      <FormControlsTxt>註冊帳號</FormControlsTxt>
      <FormControlsLabel>Email</FormControlsLabel>
      <FormControlsInput
        type="text"
        placeholder="請輸入 email"
        key="signUpEmail"
        {...register('signUpEmail', {
          required: {
            value: true,
            message: '此欄位不可留空'
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: '格式有誤!'
          }
        })}></FormControlsInput>
      {errors.signUpEmail && (
        <FormControlsErrorText>{errors.signUpEmail.message}</FormControlsErrorText>
      )}
      <FormControlsLabel>您的暱稱</FormControlsLabel>
      <FormControlsInput
        type="text"
        placeholder="請輸入您的暱稱"
        {...register('signUpNickname', { required: true })}></FormControlsInput>
      {errors.signUpNickname && <FormControlsErrorText>此欄位不可留空</FormControlsErrorText>}
      <FormControlsLabel>密碼</FormControlsLabel>
      <FormControlsInput
        type="password"
        placeholder="請輸入密碼"
        key="signUpPassword"
        {...register('signUpPassword', {
          required: {
            value: true,
            message: '此欄位不可留空'
          },
          minLength: {
            value: 6,
            message: '密碼長度至少6位字元'
          }
        })}></FormControlsInput>
      {errors.signUpPassword && (
        <FormControlsErrorText>{errors.signUpPassword.message}</FormControlsErrorText>
      )}
      <FormControlsLabel>再次輸入密碼</FormControlsLabel>
      <FormControlsInput
        type="password"
        placeholder="再次輸入密碼"
        {...register('signUpRePassword', {
          required: {
            value: true,
            message: '此欄位不可留空'
          },
          minLength: {
            value: 6,
            message: '密碼長度至少6位字元'
          },
          validate: (val) => {
            if (watch('signUpPassword') !== val) {
              return '密碼不一致';
            }
          }
        })}></FormControlsInput>
      {errors.signUpRePassword && (
        <FormControlsErrorText>{errors.signUpRePassword.message}</FormControlsErrorText>
      )}
      <FormControlsBtnSubmit value="註冊帳號" type="submit"></FormControlsBtnSubmit>
      <FormControlsBtnLink onClick={toggleLogin}>登入</FormControlsBtnLink>
    </FormControls>
  );
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (payload: SignUpReq) => {
    const run = handleErrorAsync(async () => {
      setIsLoading(true);
      const res = await authService.signUp(payload);

      notifySuccess(`${res.message}，請重新登入`);
      setIsLogin(true);
    }, setIsLoading);

    run();
  };

  const login = async (payload: LoginReq) => {
    const run = handleErrorAsync(async () => {
      setIsLoading(true);
      const res = await authService.login(payload);

      authService.setToken(res.headers.authorization);
      authService.setUser(res.data.nickname);
      navigate('/todolist');
      notifySuccess('登入成功');
    }, setIsLoading);

    run();
  };

  useEffect(() => {
    if (authService.getToken()) {
      navigate('/todolist');
    }
  }, []);

  return (
    <LoginPage>
      {isLoading ? <Loading /> : <></>}

      <Container>
        <Side>
          <a href="#">
            <LogoImg src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="Logo" />
          </a>
          <BgImg src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
        </Side>
        <div>
          <LoginOrSign
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            signUp={signUp}
            login={login}></LoginOrSign>
        </div>
      </Container>
    </LoginPage>
  );
};

export default Auth;
