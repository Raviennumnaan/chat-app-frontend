import styled from 'styled-components';
import Spinner from './Spinner';

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function SecondarySpinner() {
  return (
    <Loader>
      <Spinner />
    </Loader>
  );
}

export default SecondarySpinner;
