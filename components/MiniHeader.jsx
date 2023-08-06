"use client";
import { useState } from "react"; // Import the useState hook
import Link from "next/link";

export default function MiniHeader({ projectData }) {
  // Step 1: Add state variable to keep track of visibility
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Event handler to toggle visibility
  const handleInfosClick = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = (e) => {

    window.scrollTo(0, 0);
    
    // Now push the new route

  };

  return (
    <header className="sticky h-28 px-6 left-0 flex justify-between w-full top-10 z-20 items-center">
      <Link className="itemFooter uppercase leading-none" href="/works" onClick={handleClick}>
        Close
      </Link>
      <span
        className="uppercase menuFooter leading-none"
        onClick={handleInfosClick} // Step 2: Attach the event handler to the "Infos" element
      >
        Infos
      </span>
      {/* Step 3: Use conditional rendering to apply classes */}
      <div
        className={`${
          isVisible ? "visible" : "invisible"
        } ${isVisible ? "opacity-1" : "opacity-0"} -z-10 transition-all fixed top-0 left-0 h-screen w-screen bg-white px-6 flex items-center justify-center`}
      >
        <h3 className="credits-serif text-center">
          {projectData[0].informations}{" "}
        </h3>
        <div className="fixed h-24 bottom-0 w-full text-center">
          <div className="flex gap-2 justify-center pb-2">
            {projectData[0].tags.map((tag, index) => (
              <h4 className="menuFooter grey" key={index}>
                {tag.title}
              </h4>
            ))}
          </div>
          <span className="itemFooter grey">{projectData[0].client}</span>
        </div>
      </div>
    </header>
  );
}
