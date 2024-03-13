import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useConversation } from './useConversation';
import { useUser } from '../user/useUser';
import Avatar from '../user/Avatar';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Messages from './Messages';
import ChatInput from './ChatInput';
import SecondarySpinner from '../../ui/SecondarySpinner';

const Container = styled.div`
  display: grid;
  height: 94%;
  grid-template-rows: 100px auto 80px;
  overflow-y: hidden;

  @media only screen and (max-width: 600px) {
    height: 90%;
  }
`;

const ChatHeader = styled.div`
  background-color: var(--color-grey-200);
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  a {
    font-size: 3rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

const Main = styled.main`
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: var(--color-grey-300);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-500);
  }
`;

const ChatFooter = styled.footer`
  background-color: var(--color-grey-200);
  padding: 1rem;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    font-size: 1.7rem;
  }
`;

function ChatRoom() {
  const [searchParams] = useSearchParams();
  const { conversations, isLoading } = useConversation();
  const { user } = useUser();

  const chatId = searchParams.get('id');

  if (!chatId)
    return (
      <Message>
        <p>Please select a chat or search for a user to chat :)</p>
      </Message>
    );

  if (isLoading) return <SecondarySpinner />;

  const friend = conversations
    .find(con => con._id === chatId)
    .participants.find(part => part._id !== user._id);

  return (
    <Container>
      <ChatHeader>
        <Link to={'/chat'}>
          <FaLongArrowAltLeft />
        </Link>
        <Avatar
          url={`${friend.avatarImage}?apikey=${
            import.meta.env.VITE_MULTIAVATAR_API_KEY
          }`}
          size={5}
        />
        <h4>{friend.username}</h4>
      </ChatHeader>
      <Main>
        <Messages />
      </Main>
      <ChatFooter>
        <ChatInput />
      </ChatFooter>
    </Container>
  );
}

export default ChatRoom;
