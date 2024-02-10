import styled from 'styled-components';
import FriendList from '../features/chat/FriendList';
import SearchUser from '../features/user/SearchUser';
import { useConversation } from '../features/chat/useConversation';
import { useUser } from '../features/user/useUser';
import { useQueryClient } from '@tanstack/react-query';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  height: 93%;
  background-color: var(--color-grey-100);
  border-right: 1px solid var(--color-grey-200);

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

const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    color: var(--color-grey-700);

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 15rem;
      height: 2px;
      background-color: var(--color-grey-700);
    }
  }
`;

function Sidebar() {
  const queryClient = useQueryClient();
  const { conversations, isLoading } = useConversation();
  const { user } = useUser();

  const friends = [];

  if (!isLoading && conversations.length !== 0) {
    conversations.forEach(con => {
      con.participants.forEach(par => {
        if (par._id !== user._id) {
          par.chatId = con._id;
          friends.push(par);
        }
      });
    });
  }

  queryClient.setQueryData(['friends'], friends);

  return (
    <StyledSidebar>
      <SearchUser />
      <FriendsContainer>
        <h4>Friends</h4>
        <FriendList friends={friends} />
      </FriendsContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
