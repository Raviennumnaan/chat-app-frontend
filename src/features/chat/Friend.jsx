import styled from 'styled-components';
import Avatar from '../user/Avatar';
import { useSearchParams } from 'react-router-dom';
import { useCreateConversation } from './useCreateConversation';

const StyledFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-grey-400);
  padding-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &.active,
  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-brand-100);
  }
`;

const AvatarWrapper = styled.div`
  padding-right: 1rem;
`;

const Username = styled.p`
  margin: 0;
`;

function Friend({ friend }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const chatId = searchParams.get('id');
  const { createConversation } = useCreateConversation();

  function handleClick() {
    if (friend.chatId) return setSearchParams({ id: friend.chatId });

    createConversation([friend._id]);
  }

  return (
    <StyledFriend
      className={chatId === friend.chatId ? 'active' : ''}
      onClick={handleClick}
    >
      <AvatarWrapper>
        <Avatar
          url={`${friend.avatarImage}?apikey=${
            import.meta.env.VITE_MULTIAVATAR_API_KEY
          }`}
          size={4}
        />
      </AvatarWrapper>
      <Username>{friend.username}</Username>
    </StyledFriend>
  );
}

export default Friend;
