import axios from 'axios';
import { API_URL } from '../utils/constants';

export const getConversations = async function () {
  const { data } = await axios.get(`${API_URL}/api/conversations`, {
    withCredentials: true,
  });

  return data.data;
};

export const createConversation = async function (participants) {
  const { data } = await axios.post(
    `${API_URL}/api/conversations`,
    {
      participants,
    },
    { withCredentials: true }
  );

  return data.data;
};

export const getConversationMessages = async function (chatId) {
  const { data } = await axios.get(`${API_URL}/api/messages/${chatId}`, {
    withCredentials: true,
  });

  return data.data;
};

export const sendMessage = async function (chatId, content) {
  const { data } = await axios.post(
    `${API_URL}/api/messages/${chatId}`,
    {
      content,
    },
    { withCredentials: true }
  );

  return data.data;
};
