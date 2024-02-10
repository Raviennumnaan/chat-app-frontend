import styled from 'styled-components';

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 10px solid;
  border-color: var(--color-brand-700) transparent;
  animation: spin 1s infinite ease-out;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
