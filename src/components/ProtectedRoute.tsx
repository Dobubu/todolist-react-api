import { Navigate, Outlet } from 'react-router-dom';

import authService from '../services/useAuth';

const ProtectedRoute = () => {
  const hasToken = authService.getToken();

  if (hasToken) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
