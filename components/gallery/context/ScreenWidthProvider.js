'use client'
import React from "react";

const ScreenWidthContext = React.createContext();

export const ScreenWidthProvider = ({ children }) => {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  
  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = () => {
  return React.useContext(ScreenWidthContext);
};

export default ScreenWidthContext;
