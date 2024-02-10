import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Avatar from '../features/user/Avatar';
import BrandName from './BrandName';
import { useUser } from '../features/user/useUser';

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-300);
  @media screen and (max-width: 576px) {
    justify-content: flex-end;

    > div {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

function Header() {
  const { user } = useUser();
  const avatarUrl = `${user.avatarImage}?apikey=${
    import.meta.env.VITE_MULTIAVATAR_API_KEY
  }`;

  return (
    <StyledHeader>
      <BrandName />
      <Nav>
        <Avatar url={avatarUrl} size={5} />
        <HeaderMenu />
      </Nav>
    </StyledHeader>
  );
}

export default Header;
