import React, { useRef, useEffect, useState } from 'react';
import { useStickyMiddle } from './gridUtils/sticky';

const FixedMiddleComponent = ({ client, tags }) => {



  return (
    <div className="projectTitleHover z-40 left-0 top-0 opacity-0 fixed h-screen w-screen flex justify-center items-center pointer-events-none" >
      <div
     
      >
        <h2 className="bigName ite uppercase text-center">{client}</h2>
        <h4 className="menuFooter grey text-center uppercase pt-4 md:pt-3">{tags}</h4>
      </div>
    </div>
  );
};

export default FixedMiddleComponent;
