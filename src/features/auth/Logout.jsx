import styled from 'styled-components';
import { useLogout } from './useLogout';

const Button = styled.button`
  display: inline-block;
  padding: 1rem 1.5rem;
  width: 10rem;
  border: none;
  background-color: var(--color-red-700);
  color: var(--color-red-100);
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 1.7rem;

  &:hover {
    background-color: var(--color-red-800);
  }
`;

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <Button onClick={logout} disabled={isPending}>
      Logout
    </Button>
  );
}

export default Logout;
