import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
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
      <p> &copy; 2024 yannicksl.com</p>
    </div>
  );
};

export default Footer;
