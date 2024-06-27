import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@material-ui/icons';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt='projects' />
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <a href={project.link}>
        <GitHub />
      </a>
    </div>
  );
};

export default ProjectDisplay;
