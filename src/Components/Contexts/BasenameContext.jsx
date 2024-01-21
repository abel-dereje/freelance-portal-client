// contexts/BasenameContext.js
import React, { createContext, useContext, useState } from 'react';

const BasenameContext = createContext();

export const BasenameProvider = ({ children }) => {
  const [basename, setBasename] = useState('defaultBasename');

  const setNewBasename = (newBasename) => {
    setBasename(newBasename);
  };

  return (
    <BasenameContext.Provider value={{ basename, setNewBasename }}>
      {children}
    </BasenameContext.Provider>
  );
};

export const useBasename = () => {
  const context = useContext(BasenameContext);
  if (!context) {
    throw new Error('useBasename must be used within a BasenameProvider');
  }
  return context;
};
