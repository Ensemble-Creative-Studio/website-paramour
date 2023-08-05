import { useEffect, useRef, useState } from "react";

export const useStickyMiddle = () => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setStyle({ position: 'sticky', top: `calc(50vh - ${height }px)` });
    }
  }, [ref]);

  return [ref, style];
};
