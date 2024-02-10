import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getConversationMessages } from '../../api/chatApi';

export function useConversationMessages() {
  const [searchParams] = useSearchParams();

  const chatId = searchParams.get('id');

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', chatId],
    queryFn: () => getConversationMessages(chatId),
  });

  return { messages, isLoading };
}
