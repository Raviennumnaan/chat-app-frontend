import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../api/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate('/');
  const queryClient = useQueryClient();

  const {
    data: user,
    isPending,
    mutate: login,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),

    onSuccess: user => {
      toast.success('Succesfully logged in');
      queryClient.setQueryData(['user'], user);
      navigate('/chat');
    },

    onError: err => {
      if (err?.response?.data?.message)
        return toast.error(err.response.data.message);
      toast.error('Error occured while Logging in');
    },
  });

  return { user, isPending, login };
}
