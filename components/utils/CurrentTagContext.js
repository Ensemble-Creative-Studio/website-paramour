"use client"// CurrentTagContext.js
import React, { createContext, useState } from 'react';

export const CurrentTagContext = createContext();

export const CurrentTagProvider = ({ children }) => {
  const [currentTag, setCurrentTag] = useState(null);

  return (
    <CurrentTagContext.Provider value={{ currentTag, setCurrentTag }}>
      {children}
    </CurrentTagContext.Provider>
  );
}
