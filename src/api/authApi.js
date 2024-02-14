import axios from 'axios';
import { API_URL } from '../utils/constants';

axios.defaults.withCredentials = true;

export const signup = async function ({ username, email, password }) {
  const { data } = await axios.post(`${API_URL}/api/auth/signup`, {
    username,
    email,
    password,
  });

  return data.data;
};

export const login = async function (email, password) {
  const { data } = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });

  return data.data;
};

export const logout = async function () {
  const { data } = await axios.get(`${API_URL}/api/auth/logout`);

  return data.data;
};
