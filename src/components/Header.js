import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #61dafb;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Header;