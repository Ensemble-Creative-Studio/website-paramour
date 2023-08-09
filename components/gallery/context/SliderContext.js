'use client'
import React from 'react';

const SliderContext = React.createContext({
  currentSlide: 0,
  setCurrentSlide: () => {},
});

export const SliderProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <SliderContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => React.useContext(SliderContext);
