import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage as sendMessageApi } from '../../api/chatApi';
import { useConversationMessages } from './useConversationMessages';
import { useSocket } from '../../context/SocketContext';
import { useUser } from '../user/useUser';

export function useSendMessage() {
  const queryClient = useQueryClient();
  const { messages } = useConversationMessages();
  const { socket } = useSocket();
  const { user } = useUser();

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: ({ chatId, content }) => sendMessageApi(chatId, content),

    onSuccess: data => {
      const temp = [...messages, data];
      queryClient.setQueryData(['messages', data.conversation], temp);
      queryClient.refetchQueries({ queryKey: ['conversations'] });
      const friends = queryClient.getQueryData(['friends']);
      const receiverId = friends.find(
        friend => friend.chatId === data.conversation
      )._id;

      socket?.emit('sendMessage', { userId: user._id, data, receiverId });
    },

    onError: err => {
      console.error(err);
    },
  });

  return { sendMessage, isPending };
}
