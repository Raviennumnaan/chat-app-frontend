import { useState } from 'react';
import { useLogin } from '../features/auth/useLogin';
import BrandName from '../ui/BrandName';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Container from '../ui/Container';

const Span = styled.span`
  color: var(--color-grey-800);
  text-transform: uppercase;
  font-weight: 400;
  a {
    color: var(--color-brand-500);
    font-weight: bold;
    text-decoration: none;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return toast.error('Please fill up the form');

    if (password.length < 8)
      return toast.error('Password should be 8 or characters');

    login({ email, password });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BrandName />
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
        <Span>
          New to Snappy? <Link to="/signup">Signup</Link>
        </Span>
      </Form>
    </Container>
  );
}

export default Login;
