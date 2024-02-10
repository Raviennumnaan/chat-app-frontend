import styled from 'styled-components';
import { useUpdatePassword } from './useUpdatePassword';
import { useState } from 'react';

const PasswordSection = styled.div`
  margin-top: 2rem;

  h3 {
    margin-bottom: 2rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 15rem;
      height: 2px;
      background-color: var(--color-grey-700);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  label {
    font-weight: bold;
    font-size: 1.7rem;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-grey-500);
    border-radius: 4px;
    font-size: 1.7rem;
    outline: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 1rem 3rem;
    background-color: var(--color-brand-600);
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover {
    background-color: var(--color-brand-800);
  }
`;

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { updatePassword, isPending } = useUpdatePassword();

  function handleSubmit(e) {
    e.preventDefault();
    updatePassword({ currentPassword, newPassword });
    setCurrentPassword('');
    setNewPassword('');
  }

  return (
    <PasswordSection>
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Current Password"
            disabled={isPending}
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            disabled={isPending}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </PasswordSection>
  );
}

export default ChangePassword;
