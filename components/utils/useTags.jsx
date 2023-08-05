'use client'
import React, { createContext, useState } from 'react';

export const TagContext = createContext();

export const TagProvider = ({ children, initialData }) => {
  const [tagData, setTagData] = useState(initialData);

  return (
    <TagContext.Provider value={{ tagData, setTagData }}>
      {children}
    </TagContext.Provider>
  );
}