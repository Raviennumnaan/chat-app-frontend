import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateUser as updateUserApi } from '../../api/userApi';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ field, value }) => updateUserApi(field, value),

    onSuccess: user => {
      queryClient.setQueryData(['user'], user);
      toast.success('Updated user successfully');
    },

    onError: err => {
      console.error(err);
      toast.err('An error occured');
    },
  });

  return { updateUser, isUpdating };
}
