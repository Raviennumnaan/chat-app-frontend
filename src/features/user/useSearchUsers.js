import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';

export const useSearchUsers = query => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await axios.get(`${API_URL}/api/users/${query}`, {
          cancelToken: source.token,
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
    fetchMovies();

    return () => source.cancel();
  }, [query]);

  return { users, isloading, error };
};
