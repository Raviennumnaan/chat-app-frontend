import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/userApi';

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return { user, isLoading, isAuthenticated: Boolean(user?._id), error };
}
