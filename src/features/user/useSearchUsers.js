import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { useToken } from '../../context/TokenContext';

export const useSearchUsers = query => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useToken();

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await axios.get(`${API_URL}/api/users/${query}`, {
          cancelToken: source.token,
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data;

        setUsers(data.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setUsers([]);
      setError('');
      return;
    }
    // handleCloseMovie();
    fetchUsers();

    return () => source.cancel();
  }, [query, token]);

  return { users, isloading, error };
};
