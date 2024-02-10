import styled from 'styled-components';

const Img = styled.img`
  display: inline-block;
  width: ${props => `${props.size}rem`};
  border-radius: 50%;
`;

function Avatar({ url, size }) {
  return <Img src={url} alt="user Avatar" size={size} />;
}

export default Avatar;
