import styled from 'styled-components'

import { MainContainer } from "./MainStyled";

export const LoginPage = styled.div`
  background-color: var(--primary);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  
  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    padding: 48px 31px;
    justify-content: start;
  }
`;

export const Side = styled.div`
  width: 386px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const LogoImg = styled.img`
  margin-bottom: 16px;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const BgImg = styled.img`
  @media (max-width: 576px) {
    display: none;
  }
`

export const FormControls = styled.form`
  margin-left: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    margin-left: 0;
  }
`

export const FormControlsTxt = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 24px;

  @media (max-width: 576px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const FormControlsLabel = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 16px 0 4px 0;
`

export const FormControlsInput = styled.input`
  font-weight: normal;
  border: none;
  border-radius: 10px;
  width: 304px;
  padding: 12px 16px;
  margin: 4px 0;

  &:focus {
    outline: 3px solid #fff;
  }

  &:placeholder {
    color: var(--gray);
  }
`

export const FormControlsBtnSubmit = styled.input`
  width: 128px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: var(--secondary);
  color: #fff;
  align-self: center;
  margin: 24px 0;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
`

export const FormControlsBtnLink = styled.a`
  text-decoration: none;

  display: block;
  color: var(--secondary);
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`

export const FormControlsErrorText = styled.span`
  margin: 4px 0 16px 0;
  color: var(--danger);
  font-size: 0.875rem;
`