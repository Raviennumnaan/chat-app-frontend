import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  img {
    height: 5rem;
  }

  h1 {
    color: var(--color-indigo-700);
    text-transform: uppercase;
  }
`;

export default function BrandName() {
  return (
    <Brand>
      <img src={Logo} alt="Logo" />
      <h1>Snappy</h1>
    </Brand>
  );
}
