import { createContext, useState } from 'react';

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('Alex');

  const login = name => setUsername(name);
  const logout = () => setUsername('');

  const contextValue = { username, login, logout };
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
