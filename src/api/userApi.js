import axios from 'axios';
import { API_URL } from '../utils/constants';

export const getUser = async function () {
  const { data } = await axios.get(`${API_URL}/api/auth/status`, {
    withCredentials: true,
  });

  return data.data;
};

export const updateUser = async function (field, value) {
  const { data } = await axios.patch(
    `${API_URL}/api/users/me`,
    {
      [field]: value,
    },
    { withCredentials: true }
  );

  return data.data;
};

export const updatePassword = async function (currentPassword, newPassword) {
  const { data } = await axios.patch(
    `${API_URL}/api/users/updatePassword`,
    {
      currentPassword,
      newPassword,
    },
    { withCredentials: true }
  );

  return data.data;
};
