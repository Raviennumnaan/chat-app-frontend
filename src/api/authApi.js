import axios from 'axios';
import { API_URL } from '../utils/constants';

export const signup = async function ({ username, email, password }) {
  const { data } = await axios.post(
    `${API_URL}/api/auth/signup`,
    {
      username,
      email,
      password,
    },
    { withCredentials: true }
  );

  return data.data;
};

export const login = async function (email, password) {
  const { data } = await axios.post(
    `${API_URL}/api/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return data.data;
};

export const logout = async function () {
  const { data } = await axios.get(`${API_URL}/api/auth/logout`, {
    withCredentials: true,
  });

  return data.data;
};
