'use client'

// useSliderKeyboardNavigation.js
import { useEffect } from "react";

export function useSliderKeyboardNavigation(instanceRef) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        instanceRef?.current?.next();
      } else if (event.key === "ArrowLeft") {
        instanceRef?.current?.prev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [instanceRef]);
}
