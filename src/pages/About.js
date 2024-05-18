import React from 'react';

import '../components/SideNav.css';
import bg1 from '../assets/bg1.png';

const About = () => {
  return (
    <div
    // className='homeParent'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
    >
      <img src={bg1}  className='homeParent' />
      <p style={{ display: 'flex', alignItems: 'center' }} >Hello, my name is <span style={{ background: 'black', color: 'white', paddingLeft: '0.5rem', paddingRight: '0.5rem', marginLeft: '0.5rem' }}>Niyati Garg</span></p>
      <h1 style={{ fontSize: '4rem', margin: '1rem' }}>About</h1>
      <p style={{display: 'flex', textAlign: 'center', width: '60vw' }}>I am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applicationsI am a developer specializing in web and mobile applications.</p>
    </div>
  );
};

export default About;