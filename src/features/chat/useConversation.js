import { useQuery } from '@tanstack/react-query';
import { getConversations } from '../../api/chatApi';
import { useToken } from '../../context/TokenContext';

export function useConversation() {
  const { token } = useToken();

  const { data: conversations, isLoading } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => getConversations(token),
  });

  return { conversations, isLoading };
}
