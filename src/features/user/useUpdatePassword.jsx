import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updatePassword as updatePasswordApi } from '../../api/userApi';

export function useUpdatePassword() {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: ({ currentPassword, newPassword }) =>
      updatePasswordApi(currentPassword, newPassword),

    onSuccess: () => {
      toast.success('Password updated successfully');
    },

    onError: err => {
      if (err?.response?.data?.message)
        return toast.error(err.response.data.message);
      toast.error('An error occured');
    },
  });

  return { updatePassword, isPending };
}
