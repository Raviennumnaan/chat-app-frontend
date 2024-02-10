import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from './Loader';
import { useUser } from '../features/user/useUser';
import { SocketProvider } from '../context/SocketContext';

function ProtectedRoute({ children }) {
  // 1) Load authenticated user
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <Loader />;

  return <SocketProvider>{children}</SocketProvider>;
}

export default ProtectedRoute;
