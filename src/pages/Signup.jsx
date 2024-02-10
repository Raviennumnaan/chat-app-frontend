import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { toast } from 'react-toastify';
import { useSignup } from '../features/auth/useSignup';
import BrandName from '../ui/BrandName';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Span = styled.span`
  color: var(--color-grey-700);
  text-transform: uppercase;
  font-weight: 400;
  a {
    color: var(--color-brand-500);
    font-weight: bold;
    text-decoration: none;
  }
`;

function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { isPending, signup } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    const { password, confirmPassword, username, email } = values;

    if (!password || !confirmPassword || !email || !username)
      return toast.error('Please fill up the form');

    if (username.length <= 3)
      return toast.error('Username should be greater than 3 characters');

    if (password.length < 8)
      return toast.error('Password should be 8 or more characters');

    if (password !== confirmPassword)
      return toast.error('Passwords should match');

    signup(values);
  }

  function handleChange(e) {
    setValues(val => {
      return { ...val, [e.target.name]: e.target.value };
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BrandName />
        <Input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit" disabled={isPending}>
          Create User
        </Button>
        <Span>
          Already have an account? <Link to="/login">Login</Link>
        </Span>
      </Form>
    </Container>
  );
}

export default Register;
