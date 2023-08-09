'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useStickyMiddle } from './gridUtils/sticky';

const StickyMiddleComponent = ({ client, tags }) => {
  const [ref, style] = useStickyMiddle();
  const componentRef = useRef(null);
  const [isMiddle, setIsMiddle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const { top, height } = componentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate the distance from the top of the element to the middle of the viewport
        const distanceToMiddle = Math.abs(top - windowHeight / 2);
        const isElementInMiddle = distanceToMiddle > (-height / 2 - 10) && distanceToMiddle < (height / 2 + 10);
     
        setIsMiddle(isElementInMiddle);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [componentRef]);


  return (
    <div className="z-40 sticky pointer-events-none" ref={ref} style={style}>
      <div
        ref={componentRef}
        style={{ opacity: isMiddle ? '1' : '0', transition: 'opacity 0.3s ease' }}
      >
        <h2 className="projectTitle uppercase text-center">{client}</h2>
        <h4 className="projectTag text-center uppercase pt-4">{tags}</h4>
      </div>
    </div>
  );
};

export default StickyMiddleComponent;
