import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export default function AdminGuard() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
