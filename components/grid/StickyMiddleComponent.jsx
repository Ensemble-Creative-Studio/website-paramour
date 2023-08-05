'use client'
import React from 'react';
import { useStickyMiddle } from './gridUtils/sticky';

const StickyMiddleComponent = ({client, tags}) => {
    const [ref, style] = useStickyMiddle();
    return (
        <div className="z-10  sticky pointer-events-none " ref={ref} style={style}>
            <h2 className="projectTitle uppercase text-center">
                {client}
            </h2>
            <h4 className="projectTag text-center uppercase pt-4">
                {tags}
            </h4>
        </div>
    )
}

export default StickyMiddleComponent;
