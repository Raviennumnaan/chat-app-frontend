import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getConversationMessages } from '../../api/chatApi';
import { useToken } from '../../context/TokenContext';

export function useConversationMessages() {
  const [searchParams] = useSearchParams();

  const chatId = searchParams.get('id');
  const { token } = useToken();

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => getConversationMessages(chatId, token),
  });

  return { messages, isLoading };
}
