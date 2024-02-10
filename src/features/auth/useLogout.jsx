import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { logout as logoutApi } from '../../api/authApi';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      toast.success('Successfully logged out');
      queryClient.removeQueries();
      navigate('/login');
    },

    onError: err => {
      console.error(err);
      toast.error('Something went wrong');
    },
  });

  return { logout, isPending };
}
