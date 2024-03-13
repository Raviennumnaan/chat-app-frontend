import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TokenContext = createContext();

function TokenProvider({ children }) {
  const [token, setToken] = useLocalStorage(null, 'token');

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const context = useContext(TokenContext);

  if (!context)
    throw new Error('Token context was used outside darkmode provider');

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useToken, TokenProvider };
