import React from 'react';
import ProjectItem from '../components/projectitem';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx, link) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} link={project.link} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
