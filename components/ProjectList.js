"use client"

import { useContext } from 'react';
import { ProjectContext } from './utils/useProjects';
import WorksGrid from './grid/WorksGrid';


 export default function ProjectList() {
  const { filteredProjects } = useContext(ProjectContext);
  return (
    <div>
      <WorksGrid filteredProject={filteredProjects}/>
      {/* {filteredProjects.map((project) => (
        <div key={project._id}>
          <h2>{project.client}</h2>
      
        </div>
      ))} */}
    </div>
  );
}