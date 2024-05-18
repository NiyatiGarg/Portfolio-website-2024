import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import { NavBarItems } from '../utils/NavUtils';
import ProfilePic from '../../src/assets/profilePic.jpeg';
// import bg1 from '../../public/assets/bg1.png';
import styledd from 'styled-components';
import { styled, useTheme } from '@mui/material/styles';
import './SideNav.css';
import {
  AppBar as MuiAppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  CssBaseline,
  Drawer as MuiDrawer,
  Divider,
  Box,
} from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Interests from '../pages/Interests';
import Profession from '../pages/Profession';
import Skills from '../pages/Skills';

const Nav = styledd.nav`
  display: flex;
`;

const NavLink = styledd(Link)`
  
  &:hover {
  }
`;
const drawerWidth = 300;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideNav = () => {
  const theme = useTheme();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: 'flex', padding: '5rem', height: '100vh', }}
    >
        {/* <div  onClick={handleDrawerOpen} ><MenuIcon style={{fontSize: '40px', padding: '7px'}} className='menuIcon'/>
        </div> */}
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', margin: '2rem 0' }}>
            <img src={ProfilePic} style={{ borderRadius: '50%', height: '250px', border: '5px solid #D7A6F9' }}/>
          <h2>Niyati Garg</h2>
          <p style={{ fontSize: '1rem', padding: 0, margin: 0 }}>Front End Developer | React Js</p>
        </div>
        <Divider />
        <List style={{}}>
          {NavBarItems.map((data, index) => (
            <NavLink to={data.route} >
              <ListItem key={index} disablePadding >
                <ListItemButton style={{ alignItems: 'center', display: 'flex', paddingLeft: '4rem', paddingRight: '4rem' }}>
                  <ListItemIcon>
                    {data.icon}
                  </ListItemIcon>
                  <Nav>
                    <NavLink to={data.route}>{data.title} </NavLink>
                  </Nav>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </MuiDrawer>
    </Box>
  );
};

export default SideNav;
