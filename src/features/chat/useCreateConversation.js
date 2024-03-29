import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createConversation as createConversationApi } from '../../api/chatApi';
import { useNavigate } from 'react-router-dom';

export function useCreateConversation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createConversation, isPending } = useMutation({
    mutationFn: ({ participants, token }) =>
      createConversationApi(participants, token),

    onSuccess: data => {
      const conversations = queryClient.getQueryData(['conversations']);
      conversations.push(data);
      queryClient.setQueryData(['conversations'], conversations);
      queryClient.refetchQueries({ queryKey: ['conversations'] });
      navigate(`/chat?id=${data._id}`);
    },

    onError: err => {
      console.error(err);
    },
  });

  return { createConversation, isPending };
}
