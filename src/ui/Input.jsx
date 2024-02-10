import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: transparent;
  display: flex;
  padding: 1.4rem;
  border: 0.2rem solid var(--color-grey-300);
  border-radius: 0.4rem;
  color: var(--color-grey-900);
  width: 100%;
  font-size: 1.6rem;
  &:focus {
    border: 0.2rem solid var(--color-indigo-700);
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

export default function Input({ type, placeholder, name, onChange, value }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}
