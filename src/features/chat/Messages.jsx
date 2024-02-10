import styled from 'styled-components';
import Message from './Message';
import { useConversationMessages } from './useConversationMessages';
import { useEffect, useRef } from 'react';
import SecondarySpinner from '../../ui/SecondarySpinner';

const StyledMessages = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
  }
`;

function Messages() {
  const { messages, isLoading } = useConversationMessages();
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behaviour: 'smooth', block: 'end' });
  }, [messages]);

  if (isLoading) return <SecondarySpinner />;

  if (messages.length === 0) return <p>Start Your conversation</p>;

  return (
    <StyledMessages ref={messageRef}>
      <ul>
        {messages.map(message => (
          <Message message={message} key={message._id} />
        ))}
      </ul>
    </StyledMessages>
  );
}

export default Messages;
