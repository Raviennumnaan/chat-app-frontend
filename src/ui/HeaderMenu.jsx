import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMoon, FaRegUser } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa6';
import { useDarkMode } from '../context/DarkModeContext';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledIconWrapper = styled.li`
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.3s;

  &:hover {
    color: var(--color-brand-600);
  }
`;

function HeaderMenu() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeaderMenu>
      <StyledIconWrapper>
        <Link to="/account">
          <FaRegUser />
        </Link>
      </StyledIconWrapper>

      <StyledIconWrapper onClick={toggleDarkMode}>
        {!isDarkMode ? <FaMoon /> : <FaRegSun />}
      </StyledIconWrapper>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
