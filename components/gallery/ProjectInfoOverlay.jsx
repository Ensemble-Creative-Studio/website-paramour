// ProjectInfoOverlay.js
import React from "react";

function ProjectInfoOverlay({ projectData }) {
  return (
    <div className="animation-fadeout opacity-100 fixed top-0 left-0 z-30 h-screen w-screen almostWhite flex justify-center items-center">
      <div className="z-10  sticky pointer-events-none " >
          <h2 className="bigName uppercase text-center">
              {projectData[0].client}
          </h2>
          <div className="flex gap-2 justify-center ">
          {
  (projectData[0]?.tags?.length || 0) > 0 ? 
  projectData[0].tags.map((tag, index) => (
      <h4 className="menuFooter grey pt-4 md:pt-3" key={index}>
        {tag.title}
        {index !== projectData[0].tags.length - 1 && ", "}
      </h4>
    ))
  : 
  projectData[0].tagsSUB.map((tagSub, index) => (
      <h4 className="menuFooter grey pt-4 md:pt-3" key={index}>
        {tagSub.title}
        {index !==  projectData[0].tagsSUB.length - 1 && ", "}
      </h4>
    ))
}

        </div>
      </div>
    </div>
  );
}

export default ProjectInfoOverlay;
