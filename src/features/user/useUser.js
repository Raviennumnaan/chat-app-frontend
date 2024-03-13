import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/userApi';
import { useToken } from '../../context/TokenContext';

export function useUser() {
  const { token } = useToken();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(token),
  });

  return { user, isLoading, isAuthenticated: Boolean(user?._id), error };
}
