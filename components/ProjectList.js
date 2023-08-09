"use client"





//  export default function ProjectList() {
//   const { filteredProjects } = useContext(ProjectContext);
//   return (
//     <div>
//       <WorksGrid filteredProject={filteredProjects}/>
//       {/* {filteredProjects.map((project) => (
//         <div key={project._id}>
//           <h2>{project.client}</h2>
      
//         </div>
//       ))} */}
//     </div>
//   );
// }

'use client'
import { useContext } from 'react';
import { ProjectContext } from './utils/useProjects';
import WorksGrid from './grid/WorksGrid';
import WorksGridDesktop from './grid/WorksGridDesktop';
import React, { useState, useEffect } from "react";

function ProjectList() {
  const { filteredProjects } = useContext(ProjectContext);
    const [screenWidth, setScreenWidth] = useState(null); // Initialize with null
  
    useEffect(() => {
      // Set the initial width when the component mounts
      setScreenWidth(window.innerWidth);
  
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 
  
    // This ensures we skip rendering until we have a valid screen width
    if (screenWidth === null) return null;
  
    if (screenWidth < 768) {
      return      <WorksGrid filteredProject={filteredProjects}/>

    } else {
      return      <WorksGridDesktop filteredProject={filteredProjects}/>
    }
  }
  
  export default ProjectList;