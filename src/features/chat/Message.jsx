import styled, { css } from 'styled-components';
import { useUser } from '../user/useUser';
import { formatDate } from '../../utils/helpers';

const myMessage = css`
  align-self: flex-end;
  background-color: var(--color-brand-600);

  &::after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid var(--color-brand-600);
    border-right: 15px solid transparent;
    border-top: 15px solid transparent;
    border-bottom: 15px solid var(--color-brand-600);
    right: -16px;
    top: 8px;
  }
`;

const notMyMessage = css`
  align-self: flex-start;
  background-color: var(--color-grey-300);
  color: var(--color-grey-800);

  &::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid var(--color-grey-300);
    border-top: 15px solid var(--color-grey-300);
    border-bottom: 15px solid transparent;
    left: -16px;
    top: 8px;
  }
`;

const Li = styled.li`
  position: relative;
  padding: 1rem 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #f4f4f4;

  ${props => (props.$isMyMessage ? myMessage : notMyMessage)};
`;

const MessageContent = styled.p`
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
`;

const TimeStamp = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
`;

function Message({ message }) {
  const { user } = useUser();
  const isMyMessage = user._id === message.sender;
  const time = formatDate(message.timestamp);

  return (
    <Li $isMyMessage={isMyMessage}>
      <MessageContent>{message.content}</MessageContent>
      <TimeStamp className="timestamp">{time}</TimeStamp>
    </Li>
  );
}

export default Message;
