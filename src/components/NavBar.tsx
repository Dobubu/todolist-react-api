import { Link } from 'react-router-dom';

import { Nav, NavItem } from '../pages/TodoListStyled';

const NavBar = () => {
  return (
    <Nav>
      <h1>
        <Link to="/">ONLINE TODO LIST</Link>
      </h1>
      <ul>
        <NavItem>
          <a href="#">
            <span>王小明的代辦</span>
          </a>
        </NavItem>
        <li>
          <Link to="/">登出</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
