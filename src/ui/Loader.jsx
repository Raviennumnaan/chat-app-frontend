import styled from 'styled-components';
import Spinner from './Spinner';

const StyledLoader = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.2rem);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
`;

/*
body {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid;
  border-color: orange transparent;
  animation: spin 1s infinite ease-out;
}


*/

function Loader() {
  return (
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  );
}

export default Loader;
