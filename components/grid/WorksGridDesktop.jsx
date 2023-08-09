'use client'

import React, { useState } from 'react';
import DelayLink from '../utils/DelayLink';
import FadingImage from '../utils/FadeInImage';
import FixedMiddleComponent from './FixedMiddleComponent';


export default function WorksGridDesktop({ filteredProject }) {
  return (
    <>
      {filteredProject.map((project, index) => (
        <div className="gridProjects h-screen" key={index}>
          <ProjectRow project={project} />
        </div>
      ))}
    </>
  );
}

const ProjectRow = ({ project }) => {
  const tags = project.tags.map((tag) => tag.title).join(", ");

  const [firstStart, setFirstStart] = useState(() => randomStartColumn(0));
  const [firstSpan, setFirstSpan] = useState(() => randomSpan(isWideOrVideo(project)));
  const [firstPosition, setFirstPosition] = useState(() => decideItemPosition(0));

  const [secondStart, setSecondStart] = useState(() => randomStartColumn(1));
  const [secondSpan, setSecondSpan] = useState(() => getSecondSpan(firstStart, firstSpan, isWideOrVideo(project)));
  const [secondPosition, setSecondPosition] = useState(() => decideItemPosition(1, firstPosition));

  return (
    <>
      <Project 
        project={project} 
        index={0}
        startColumn={firstStart}
        span={firstSpan}
        position={firstPosition}
        tags={tags}
      />
      <Project 
        project={project} 
        index={1}
        startColumn={secondStart}
        span={secondSpan}
        position={secondPosition}
        tags={tags}
      />
    </>
  );
}


function decideItemPosition(index, prevPosition) {
  let positions = ['start', 'center', 'end'];

  if (prevPosition === 'start') {
    positions = ['end'];
  } else if (prevPosition === 'end') {
    positions = ['start'];
  } else if (prevPosition === 'center') {
    positions = ['center', 'center'];
  }

  return positions[Math.floor(Math.random() * positions.length)];
}

function decidePadding(index, position) {
  const paddingValues = ['8vh', '16vh'];

  if (position === 'start') {
    return { paddingTop: paddingValues[Math.floor(Math.random() * paddingValues.length)] };
  } else if (position === 'end') {
    return { paddingBottom: paddingValues[Math.floor(Math.random() * paddingValues.length)] };
  }
  return {};
}

const Project = ({ project, index, tags, startColumn, span, position }) => {
  const paddingStyle = decidePadding(index, position);

  const alignItems = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
  }[position];

  const style = {
    gridColumnStart: startColumn,
    gridColumnEnd: `span ${span}`,
    alignItems: alignItems,
    ...paddingStyle
  };

  console.log(tags)
  return (
    <div className="flex" style={style}>
      <DelayLink
        className="flex projectHover"
        href={`/works/${project.slug.current}`}
      >
        <ProjectMedia project={project} index={index} /> 
        {/* Notice the index prop here */}
        <FixedMiddleComponent client={project.client} tags={tags} />
      </DelayLink>
    </div>
  );
};

const ProjectMedia = ({ project, index }) => {
  if (index === 0) {
    return (
      <div className='relative h-auto'>
        {hasVideos(project) ? (
          <video autoPlay playsInline loop muted className="w-full h-full">
            <source src={project.videosGallery[0].urlLoop} type="video/mp4" />
          </video>
        ) : (
          <FadingImage src={project.firstImage.url} alt="Your Image" width={1000} height={1000} />
        )}
      </div>
    );
  } else {
    return hasVideos(project) ? (
      <FadingImage src={project.firstImage.url} alt="Your Image" width={1000} height={1000} />
    ) : (
      <FadingImage src={project.secondImage.url} alt="Your Image" width={1000} height={1000} />
    );
  }
};


const isWideOrVideo = (project) => {
  return hasVideos(project) || isWideImage(project);
};

const hasVideos = project => project.videosGallery && project.videosGallery.length > 0;

const isWideImage = project => project.firstImage.metadata.dimensions.aspectRatio >= 1;

const randomValue = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

const randomSpan = (isWideOrVideoBool) => {
  const spans = isWideOrVideoBool ? [4, 5] : [3, 4];
  return spans[Math.floor(Math.random() * spans.length)];
}

const randomStartColumn = (index, firstSpan = 0) => {
  if(index === 0) {
    return randomValue(2);
  } else {
    return 7 + randomValue(2);
  }
}

const getSecondSpan = (firstStart, firstSpan, isWideOrVideoBool) => {
  let secondSpan = randomSpan(isWideOrVideoBool);
  
  // Ensure that the sum of the first and second spans is at least 7
  while (firstSpan + secondSpan < 7) {
    secondSpan = randomSpan(isWideOrVideoBool);
  }

  return secondSpan;
}
