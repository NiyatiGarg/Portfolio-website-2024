import React from 'react';
import styled from 'styled-components';
import {FaLinkedin, FaTwitter} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  a {
    color: white;
    margin: 0 1rem;
    font-size: 1.5rem;
  }

  a:hover {
    color: #61dafb;
  }
`;

const SocialMedia = () => {
  return (
    <SocialContainer>
        <a href="https://www.linkedin.com/in/niyati-garg-59b385211/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/NiyatiGarg" target="_blank" rel="noopener noreferrer">
        <FaXTwitter />
      </a>
      
      <a href="https://twitter.com/garg4_niyati" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </SocialContainer>
  );
};

export default SocialMedia;
