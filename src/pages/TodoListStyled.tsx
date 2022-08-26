import styled from 'styled-components';

import { MainContainer } from './MainStyled';

export const TodoListPage = styled.div`
  background-image: linear-gradient(175deg, var(--primary) 60%, #fff 40%);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px 0 32px;

  @media (max-width: 576px) {
    margin-bottom: 16px;

    ul li {
      margin-top: 11px;
    }

    ul a {
      margin-left: 0;
    }
  }

  h1 a {
    width: 243px;
    height: 39px;
    background: url(https://upload.cc/i1/2022/03/23/8vTzYG.png) no-repeat;
    display: block;
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
  }

  ul {
    display: flex;
    font-size: 1rem;

    a {
      text-decoration: none;
      color: var(--secondary);
      margin-left: 24px;
      cursor: pointer;

      &:hover {
        color: #d87355;
      }

      span {
        font-weight: bold;
      }
    }
  }
`;

export const NavItem = styled.li`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Container = styled(MainContainer)`
  padding: 16px 32px;

  @media (max-width: 576px) {
    background-image: linear-gradient(175deg, var(--primary) 100%, #fff 0%);
  }
`;

export const TodoWrapper = styled.div`
  width: 500px;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const TodoInputEl = styled.form`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 16px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);

  input {
    background: #fff;
    border: none;
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 47px;
    font-size: 1rem;
    padding-left: 16px;
  }

  a {
    display: block;
    width: 40px;
    height: 39px;
    position: absolute;
    background: var(--secondary);
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    border-radius: 10px;
    top: 4px;
    right: 4px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const TodoContent = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
`;

export const TodoTab = styled.ul`
  display: flex;
  justify-content: space-evenly;

  li {
    width: 100%;
  }

  a {
    display: block;
    color: var(--gray);
    text-decoration: none;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    padding: 16px;
    border-bottom: 2px solid #efefef;
  }

  .active {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
  }
`;

export const TodoItems = styled.div`
  padding: 23px 17px 32px 24px;
`;

export const TodoItemWrapper = styled.ul`
  margin-bottom: 8px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 17px;

    a {
      margin-left: 17px;
      display: block;
      font-size: 14px;
      color: var(--secondary);
      opacity: 0;
      cursor: pointer;
      padding: 7px;
    }

    &:hover a {
      opacity: 1;
    }
  }
`;

export const TodoLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
  color: var(--secondary);
  line-height: 20.27px;
`;

export const TodoInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  margin-right: 16px;

  &:checked ~ span {
    color: var(--gray);
    text-decoration: line-through;
    transition: all 0.4s ease-in-out;
  }
`;

export const TodoStatistics = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: var(--secondary);
    font-size: 0.875rem;
  }

  a {
    color: var(--gray);
    font-size: 0.875rem;
    text-decoration: none;
    cursor: pointer;
  }
`;
