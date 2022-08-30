import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '../components/NavBar';

const DefaultLayout = () => {
  return (
    <Layout>
      <NavBar />
      <Outlet />
    </Layout>
  );
};

export const Layout = styled.div`
  background-image: linear-gradient(175deg, var(--primary) 60%, #fff 40%);
`;

export default DefaultLayout;
