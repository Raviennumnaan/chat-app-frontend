import axios from 'axios';
import { API_URL } from '../utils/constants';

export const getConversations = async function (token) {
  const { data } = await axios.get(`${API_URL}/api/conversations`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
};

export const createConversation = async function (participants, token) {
  const { data } = await axios.post(
    `${API_URL}/api/conversations`,
    {
      participants,
    },
    { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
  );
  return data.data;
};

export const getConversationMessages = async function (chatId, token) {
  const { data } = await axios.get(`${API_URL}/api/messages/${chatId}`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
};

export const sendMessage = async function (chatId, content, token) {
  const { data } = await axios.post(
    `${API_URL}/api/messages/${chatId}`,
    {
      content,
    },
    { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
  );

  return data.data;
};
