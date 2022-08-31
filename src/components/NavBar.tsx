import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import authService from '../services/useAuth';
import { notifySuccess } from '../services/useNotify';
import { Nav, NavItem } from '../pages/TodoListStyled';

const NavBar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await authService.signOut();
    authService.clearToken();
    navigate('/');
    notifySuccess('登出成功');
  };

  return (
    <Nav>
      <h1>
        <Link to="/">ONLINE TODO LIST</Link>
      </h1>
      {authService.getToken() ? (
        <ul>
          <NavItem>
            <a>
              <span>{authService.getUser()} 的代辦</span>
            </a>
          </NavItem>
          <li>
            <a onClick={logout}>
              <span>登出</span>
            </a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </Nav>
  );
};

export default NavBar;
