import axios from 'axios';
import { API_URL } from '../utils/constants';

axios.defaults.withCredentials = true;

export const getConversations = async function () {
  const { data } = await axios.get(`${API_URL}/api/conversations`);

  return data.data;
};

export const createConversation = async function (participants) {
  const { data } = await axios.post(`${API_URL}/api/conversations`, {
    participants,
  });

  return data.data;
};

export const getConversationMessages = async function (chatId) {
  const { data } = await axios.get(`${API_URL}/api/messages/${chatId}`);

  return data.data;
};

export const sendMessage = async function (chatId, content) {
  const { data } = await axios.post(`${API_URL}/api/messages/${chatId}`, {
    content,
  });

  return data.data;
};
