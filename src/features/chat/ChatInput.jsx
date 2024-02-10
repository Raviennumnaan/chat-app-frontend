import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoSend } from 'react-icons/io5';
import styled from 'styled-components';
import { useSendMessage } from './useSendMessage';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
`;

const Input = styled.input`
  background-color: transparent;
  padding: 1rem;
  border: 0.2rem solid var(--color-grey-300);
  border-radius: 3rem;
  color: var(--color-grey-900);
  font-size: 1.6rem;
  width: 50%;
  transition: all 0.3s;

  &:focus {
    border: 0.2rem solid var(--color-indigo-700);
    outline: none;
    width: 70%;
  }

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

const Button = styled.button`
  font-size: 3rem;
  outline: none;
  border: none;
  transition: all 0.3s;
  background-color: transparent;

  &:hover {
    color: var(--color-brand-600);
  }
`;

function ChatInput() {
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const { sendMessage, isPending } = useSendMessage();

  const chatId = searchParams.get('id');

  function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;
    sendMessage({ chatId, content: message });
    setMessage('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="message"
        id="message"
        placeholder="Send message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        disabled={isPending}
      />
      <Button type="submit">
        <IoSend />
      </Button>
    </Form>
  );
}

export default ChatInput;
