import styled from 'styled-components';
import Container from '../ui/Container';
import EditInput from '../ui/EditInput';
import Logout from '../features/auth/Logout';
import ChangePassword from '../features/user/ChangePassword';
import { useUpdateUser } from '../features/user/useUpdateUser';
import { useUser } from '../features/user/useUser';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Avatar from '../features/user/Avatar';
import Loader from '../ui/Loader';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  a {
    font-size: 4rem;
    transition: all 0.3s;

    &:hover {
      color: var(--color-brand-700);
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .avatar {
      display: none;
    }
  }
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 4rem;
  position: relative;
  color: var(--color-grey-700);

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 25rem;
    height: 2px;
    background-color: var(--color-grey-700);
  }
`;

const AccountContainer = styled.div`
  width: min(100%, 90rem);
  border-radius: 5px;
  background-color: var(--color-grey-100);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Account() {
  const { user, isLoading } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const multiAvatarApiKey = import.meta.env.VITE_MULTIAVATAR_API_KEY;

  function handleUpdateUser(field, value) {
    updateUser({ field, value });
  }

  if (isLoading) return <Loader />;

  return (
    <Container>
      <AccountContainer>
        <Header>
          <div className="left">
            <Link to="/chat">
              <FaLongArrowAltLeft />
            </Link>
            <Heading>Personal Details</Heading>
          </div>
          <div className="avatar">
            <Avatar
              url={`${user.avatarImage}?apikey=${multiAvatarApiKey}`}
              size={10}
            />
          </div>
        </Header>

        <EditInput
          id="username"
          label="username"
          value={user.username}
          onSubmit={handleUpdateUser}
          disabled={isUpdating}
        />
        <EditInput
          id="email"
          label="email"
          value={user.email}
          onSubmit={handleUpdateUser}
          disabled={isUpdating}
        />
        <ChangePassword />
        <Logout />
      </AccountContainer>
    </Container>
  );
}

export default Account;
