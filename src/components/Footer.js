import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Niyati Garg. All rights reserved.</p>
      <SocialMedia />
    </FooterContainer>
  );
};

export default Footer;
