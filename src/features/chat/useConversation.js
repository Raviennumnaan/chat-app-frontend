import { useQuery } from '@tanstack/react-query';
import { getConversations } from '../../api/chatApi';

export function useConversation() {
  const { data: conversations, isLoading } = useQuery({
    queryKey: ['conversations'],
    queryFn: getConversations,
  });

  return { conversations, isLoading };
}
