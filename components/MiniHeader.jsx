"use client";
import { useState } from "react"; // Import the useState hook
import { useRouter } from "next/navigation"; // Step 1: Import useRouter from "next/router"
export default function MiniHeader({ projectData }) {
  // Step 1: Add state variable to keep track of visibility
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter(); // Step 2: Access the router object from useRouter()

  // Step 2: Event handler to toggle visibility
  const handleInfosClick = () => {
    setIsVisible(!isVisible);
  };

  // Step 3: Event handler for "Close" link to go back in history
  const handleCloseClick = () => {
    router.back(); // Use router.back() to go back in history
  };

  return (
    <header className="fixed h-28 px-12 md:px-10 left-0 flex justify-between w-full top-10 md:top-0 z-20 items-center">
      {/* Step 4: Use anchor tag and attach the handleCloseClick event handler */}
      <a
        className="itemFooter uppercase cursor-pointer leading-none"
        onClick={handleCloseClick}
      >
        Close
      </a>
      <div className="hidden md:flex items-center gap-3">
      <div className="flex gap-2 justify-center items-center ">
            {projectData[0].tags.map((tag, index) => (
              <h4 className="menuFooter grey" key={index}>
                {tag.title}
              </h4>
            ))}
       
        </div>
        <h3 className="itemFooter ">
          {projectData[0].client}{" "}
        </h3>
     
     
      </div>
      <div>
      <span
        className="uppercase menuFooter leading-none cursor-pointer"
        onClick={handleInfosClick} // Step 2: Attach the event handler to the "Infos" element
      >
        Infos
      </span>
      </div>
  
      {/* Step 3: Use conditional rendering to apply classes */}
      <div
        className={`${isVisible ? "visible" : "invisible"} ${
          isVisible ? "opacity-1" : "opacity-0"
        } -z-10 transition-all fixed top-0 left-0 h-screen w-screen bg-white px-6 flex items-center justify-center`}
      >
        <h3 className="credits-serif text-center">
          {projectData[0].informations}{" "}
        </h3>
        <div className="md:hidden block fixed h-24 bottom-0 w-full text-center">
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
