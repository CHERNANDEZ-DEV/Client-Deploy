// src/contexts/UserContext.js

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Carlos Hernández',
    email: '00002721@uca.edu.sv',
    id: '06306281-7',
    address: 'Casa N°12'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
