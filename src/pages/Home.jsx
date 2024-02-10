import styled, { css } from 'styled-components';
import ChatRoom from '../features/chat/ChatRoom';
import { useUser } from '../features/user/useUser';
import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';
import { useSearchParams } from 'react-router-dom';
import Loader from '../ui/Loader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-grey-50);
  width: min(100%, 96rem);
  margin: 0 auto;
  overflow-y: hidden;
  margin-top: 1rem;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  max-height: 100%;

  @media screen and (max-width: 576px) {
    ${props =>
      props.$show
        ? css`
            .sidebar {
              display: none;
            }
          `
        : css`
            .chatroom {
              display: none;
            }

            .sidebar {
              width: 100%;
            }
          `}
  }
`;

const SidebarContainer = styled.div`
  flex: 0 0 auto;
`;

const ChatroomContainer = styled.div`
  flex: 1;
  padding-bottom: 1rem;
`;

function Home() {
  const [searchParams] = useSearchParams();
  const { isLoading } = useUser();

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <MainContent $show={searchParams.get('id')}>
            <SidebarContainer className="sidebar">
              <Sidebar />
            </SidebarContainer>
            <ChatroomContainer className="chatroom">
              <ChatRoom />
            </ChatroomContainer>
          </MainContent>
        </>
      )}
    </Container>
  );
}

export default Home;
