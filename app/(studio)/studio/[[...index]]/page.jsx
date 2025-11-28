'use client';
import "../../../bo.css";
import { useEffect } from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  // Lenis has been removed from the studio layout, so we don't need to destroy it anymore.
  
  return (
    <div>
      <div className='py-4'>
        <a href='/' className="p-2 ml-2 border my-4 mix-blend-difference text-white">Go to website</a>
      </div>
      <NextStudio config={config} />
    </div>
  );
}
