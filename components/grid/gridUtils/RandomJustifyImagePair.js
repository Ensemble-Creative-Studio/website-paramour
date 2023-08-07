'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadingImage from '@/components/utils/FadeInImage';
function RandomJustifyImagePair({ firstImage, secondImage, alt, urlLoop }) {
  const [justifyFirst, setJustifyFirst] = useState('justify-start');
  const [firstImageWidth, setFirstImageWidth] = useState('w-1/2');
  const [secondImageWidth, setSecondImageWidth] = useState('w-1/2');
  const [gap, setGap] = useState('gap-y-4'); // Here we set a default gap
  const [isFlexColReverse, setIsFlexColReverse] = useState(false); // Default flex direction

  useEffect(() => {
    // Randomly select flex direction
    setIsFlexColReverse(Math.random() < 0.5);

    const randomJustify = Math.random() < 0.5 ? 'justify-start' : 'justify-end';
    setJustifyFirst(randomJustify);

    if (urlLoop) {
      // If urlLoop is provided, set video width to be either 58% or 66%
      const videoWidths = ['58%', '66%'];
      setFirstImageWidth(videoWidths[Math.floor(Math.random() * videoWidths.length)]);
    } else {
      // If urlLoop is not provided, set image width randomly as before
      const imageWidths = ['41%', '50%', '58%', '66%'];
      setFirstImageWidth(imageWidths[Math.floor(Math.random() * imageWidths.length)]);
    }

    const imageWidths = ['41%', '50%', '58%', '66%'];
    setSecondImageWidth(imageWidths[Math.floor(Math.random() * imageWidths.length)]);
    const gaps = ['gap-y-12', 'gap-y-16', 'gap-y-24'];
    setGap(gaps[Math.floor(Math.random() * gaps.length)]); // Setting random gap
  }, []);

  return (
    <div className={`flex flex-col ${isFlexColReverse ? 'flex-col-reverse' : 'flex-col'} pt-16 pb-48 ${gap}`}>
      {/* Applied random gap and flex direction */}
      {urlLoop ? (
        // Render the video if urlLoop is provided
        <div className={`${justifyFirst} flex w-full h-auto`}>
          <video autoPlay loop muted className="w-full h-full"  style={{ width: firstImageWidth }}>
            <source src={urlLoop} type="video/mp4" />
            {/* Add other video sources if needed */}
          </video>
        </div>
      ) : (
        // Render the image if urlLoop is not provided
    
          <FadingImage
            src={firstImage}
            alt={alt}
            className={`${justifyFirst} flex w-full h-auto`}
            style={{ width: firstImageWidth }}
            width={1000}
            height={1000}
          />
     
      )}
   
        <FadingImage className={`${justifyFirst === 'justify-start' ? 'justify-end' : 'justify-start'} flex w-full h-auto`} src={secondImage} alt={alt} style={{ width: secondImageWidth }} width={1000} height={1000} />
   
    </div>
  );
}

export default RandomJustifyImagePair;
