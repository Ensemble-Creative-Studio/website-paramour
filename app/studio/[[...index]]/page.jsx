'use client';
import { useLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react'; // Import useEffect

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  const lenis = useLenis(({ scroll }) => {});

  // Call lenis.destroy() when the component unmounts
  useEffect(() => {
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array

  return <NextStudio config={config} />;
}
