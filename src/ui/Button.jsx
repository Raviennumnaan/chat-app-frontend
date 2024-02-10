import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-brand-600);
  padding: 1.5rem 3rem;
  border: none;
  font-weight: bold;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

export default function Button({
  children,
  type = 'button',
  disabled = false,
}) {
  return (
    <StyledButton disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
}
