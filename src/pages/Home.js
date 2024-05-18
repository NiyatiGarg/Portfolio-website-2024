import React from 'react';

import '../components/SideNav.css';
import developer from '../assets/developer.png';


const Home = () => {
  return (
    <div
      className='homeParent'
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        alignItems: 'center'
      }}

    >
     
      <div  className='contentParent' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ display: 'flex', alignItems: 'center' }} >Hello, my name is <span style={{ background: 'black', color: 'white', paddingLeft: '0.5rem', paddingRight: '0.5rem', marginLeft: '0.5rem' }}>Niyati Garg</span></p>
        <h1 style={{ fontSize: '4rem', margin: '1rem' , paddingLeft: 0, marginLeft: 0 }}>I'm a Developer</h1>
        <p
          style={{ display: 'flex', textAlign: 'justify', width: '50vw', }}
        >I find immense satisfaction in crafting visually appealing user interfaces. <br />
          My expertise spans a range of technologies including HTML, CSS, JavaScript, React.js, and Redux.
          I've honed my abilities through hands-on experiences and internships.<br />
          Crafting user-friendly digital experiences, building reusable components, and collaborating
          with talented teams have been my avenues of growth.<br />

          In addition to my technical skills, I'm proficient in modern development tools such as Git and
          well-versed in popular Integrated Development Environments (IDEs) like Visual Studio Code and WebStorm.<br />
          This efficiency allows me to maximize my productivity, ensuring top-notch results.
        </p>
      </div>
      <img src={developer} style={{ position: 'absolute', bottom: 0, right: 0 }} />
    </div>
  );
};

export default Home;
