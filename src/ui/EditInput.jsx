import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { useOutsideClick } from '../hooks/useOutsideClick';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1.6rem;
  outline: none;
  background-color: var(--color-grey-200);
  transition: border-color 0.3s, background-color 0.3s;

  ${({ $isEditing }) => $isEditing && editingStyles}

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const InputForm = styled.form`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const editingStyles = css`
  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-50);
`;

function EditInput({ label, id, value: defaultValue, onSubmit, disabled }) {
  const [value, setValue] = useState(defaultValue);
  const [initialValue, setInitialValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useOutsideClick(() => {
    setValue(initialValue);
    setIsEditing(false);
  }, inputRef);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    onSubmit(id, value);
    setInitialValue(value);
    setIsEditing(false);
  }

  function handleIconClick() {
    setInitialValue(value);
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  }

  return (
    <InputForm onSubmit={handleSubmit}>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input
          id={id}
          value={value}
          onChange={handleChange}
          ref={inputRef}
          autoFocus={isEditing}
          readOnly={!isEditing}
          $isEditing={isEditing}
          disabled={disabled}
        />
        <EditButton type="button" onClick={handleIconClick}>
          <FaPen />
        </EditButton>
      </InputContainer>
    </InputForm>
  );
}

export default EditInput;
