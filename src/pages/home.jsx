import React from 'react';
import { Email } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name Is Yannick 👋 </h2>
        <br></br>
        <br></br>
        <br></br>
        <div className='prompt'>
          <p>
            I am a self-taught front-end developer with a passion for learning.
          </p>
          <a href='https://www.linkedin.com/in/yannick-l-85434813b/'>
            <LinkedIn />
          </a>
          <a href='https://github.com/Yann981'>
            <GitHub />
          </a>
          <a href='mailto:yannickk8@hotmail.co.uk'>
            <Email />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, Yarn, TailwindCSS,
              StyledComponents, SASS/SCSS
            </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>NodeJS, MongoDB</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
