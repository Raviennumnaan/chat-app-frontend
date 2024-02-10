import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../api/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: user => {
      toast.success('Successfully signed up');
      queryClient.setQueryData(['user'], user);
      navigate('/chat');
    },

    onError: err => {
      if (err?.response?.data?.message)
        return toast.error(err.response.data.message);
      toast.error('Error occured while siging in');
    },
  });

  return { signup, isPending };
}
