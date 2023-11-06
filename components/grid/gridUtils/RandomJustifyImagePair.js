'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadingImage from '@/components/utils/FadeInImage';

function RandomJustifyImagePair({ firstImage, secondImage, alt, urlLoop, showOnlyFirstImage }) {
  const [justifyFirst, setJustifyFirst] = useState('justify-start');
  const [firstImageWidth, setFirstImageWidth] = useState('w-1/2');
  const [secondImageWidth, setSecondImageWidth] = useState('w-1/2');
  const [gap, setGap] = useState('gap-y-4'); // Here we set a default gap
  const [isFlexColReverse, setIsFlexColReverse] = useState(false); // Default flex direction

  useEffect(() => {
    setIsFlexColReverse(Math.random() < 0.5);
    const randomJustify = Math.random() < 0.5 ? 'justify-start' : 'justify-end';
    setJustifyFirst(randomJustify);

    if (urlLoop) {
      const videoWidths = ['58%', '66%'];
      setFirstImageWidth(videoWidths[Math.floor(Math.random() * videoWidths.length)]);
    } else {
      const imageWidths = ['41%', '50%', '58%', '66%'];
      setFirstImageWidth(imageWidths[Math.floor(Math.random() * imageWidths.length)]);
    }

    const imageWidths = ['41%', '50%', '58%', '66%'];
    setSecondImageWidth(imageWidths[Math.floor(Math.random() * imageWidths.length)]);
    const gaps = ['gap-y-12', 'gap-y-16', 'gap-y-24'];
    setGap(gaps[Math.floor(Math.random() * gaps.length)]);
  }, []);

  return (
    <div className={`flex flex-col ${isFlexColReverse ? 'flex-col-reverse' : 'flex-col'} pt-16 pb-48 ${gap}`}>
      {urlLoop ? (
        <div className={`${justifyFirst} flex w-full h-auto`}>
          <video key={urlLoop} autoPlay playsInline loop muted className="w-full h-full" style={{ width: firstImageWidth }}>
            <source src={urlLoop} type="video/mp4" />
          </video>
        </div>
      ) : firstImage && (
        <FadingImage
            src={firstImage}
            alt={alt}
            className={`${justifyFirst} flex w-full h-auto`}
            style={{ width: firstImageWidth }}
            width={1000}
            height={1000}
          />
      )}

      {!showOnlyFirstImage && firstImage && (
        <FadingImage className={`${justifyFirst === 'justify-start' ? 'justify-end' : 'justify-start'} flex w-full h-auto`} src={secondImage} alt={alt} style={{ width: secondImageWidth }} width={1000} height={1000} />
      )}
    </div>
  );
}

export default RandomJustifyImagePair;
