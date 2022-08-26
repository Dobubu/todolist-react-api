import { useState } from 'react'
import { Link } from "react-router-dom";

import { LoginPage, Container, Side, LogoImg, BgImg, FormControls, FormControlsTxt, FormControlsLabel, FormControlsInput, FormControlsBtnSubmit, FormControlsBtnLink, FormControlsErrorText } from "./LoginStyled";

interface LoginOrSignProps {
  isLogin: boolean;
  setIsLogin: (o: boolean) => void;
}

const LoginOrSign = ({ isLogin, setIsLogin }: LoginOrSignProps) => {
  const toggleLogin = () => setIsLogin(!isLogin)

  if (isLogin) {
    return (
      <>
        <FormControlsTxt>最實用的線上代辦事項服務</FormControlsTxt>
        <FormControlsLabel htmlFor="email">Email</FormControlsLabel>
        <FormControlsInput type="text" id="email" name="email" placeholder="請輸入 email" required></FormControlsInput>
        <FormControlsErrorText>此欄位不可留空</FormControlsErrorText>
        <FormControlsLabel htmlFor="pwd">密碼</FormControlsLabel>
        <FormControlsInput type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required></FormControlsInput>
        <Link className="text-center" to="todolist">
          <FormControlsBtnSubmit type="button" value="登入"></FormControlsBtnSubmit>
        </Link>
        <FormControlsBtnLink onClick={toggleLogin}>註冊帳號</FormControlsBtnLink>
      </>
    )
  }
  return (
    <>
      <FormControlsTxt>註冊帳號</FormControlsTxt>
      <FormControlsLabel htmlFor="email">Email</FormControlsLabel>
      <FormControlsInput type="text" id="email" name="email" placeholder="請輸入 email" required></FormControlsInput>
      <FormControlsLabel htmlFor="name">您的暱稱</FormControlsLabel>
      <FormControlsInput type="text" id="name" name="name" placeholder="請輸入您的暱稱" required></FormControlsInput>
      <FormControlsLabel htmlFor="pwd">密碼</FormControlsLabel>
      <FormControlsInput type="password" id="pwd" name="pwd" placeholder="請輸入密碼" required></FormControlsInput>
      <FormControlsLabel htmlFor="pwd">再次輸入密碼</FormControlsLabel>
      <FormControlsInput type="password" id="pwd" name="pwd" placeholder="再次輸入密碼" required></FormControlsInput>
      <Link className="text-center" to="todolist">
        <FormControlsBtnSubmit type="button" value="註冊帳號"></FormControlsBtnSubmit>
      </Link>
      <FormControlsBtnLink onClick={toggleLogin}>登入</FormControlsBtnLink>
    </>
  )
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <LoginPage>
      <Container>
        <Side>
          <a href="#"><LogoImg src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="Logo" /></a>
          <BgImg src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
        </Side>
        <div>
          <FormControls>
            <LoginOrSign isLogin={isLogin} setIsLogin={setIsLogin}></LoginOrSign>
          </FormControls>
        </div>
      </Container>
    </LoginPage>
  )
}

export default Login