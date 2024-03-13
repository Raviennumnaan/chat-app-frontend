import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => {
      queryClient.removeQueries();
      setToken(null);
    },

    onSuccess: () => {
      toast.success('Successfully logged out');
      navigate('/login');
    },

    onError: err => {
      console.error(err);
      toast.error('Something went wrong');
    },
  });

  return { logout, isPending };
}
