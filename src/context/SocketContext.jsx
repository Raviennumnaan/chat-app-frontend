import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useUser } from '../features/user/useUser';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const SocketContext = createContext();

function SocketProvider({ children }) {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    const newSocket = io(API_URL);
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    socket?.emit('addUser', user._id);
  }, [socket, user]);

  useEffect(() => {
    const handleMessage = data => {
      if (searchParams.get('id') === data.conversation) {
        const messages = queryClient.getQueryData([
          'messages',
          data.conversation,
        ]);
        queryClient.setQueryData(
          ['messages', data.conversation],
          [...messages, data]
        );
      } else {
        // If user not in chat notify them
        toast('Received a message');
      }
      // Refresh the friends list
      queryClient.refetchQueries({ queryKey: ['conversations'] });
    };

    socket?.on('getMessage', handleMessage);

    return () => {
      socket?.off('getMessage', handleMessage);
    };
  }, [socket, queryClient, searchParams]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

function useSocket() {
  const context = useContext(SocketContext);

  if (context === undefined)
    throw new Error('Socket context was used outside Socket provider');

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useSocket, SocketProvider };
