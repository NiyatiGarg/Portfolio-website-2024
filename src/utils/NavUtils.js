import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

export const NavBarItems = [
    {icon: <HomeOutlinedIcon/> , title: 'Home', route: '/' },
    {icon: <InfoOutlinedIcon/> , title: 'About', route: '/about' },
    {icon: <RoomPreferencesOutlinedIcon/> , title: 'Experience', route: '/experience' },
    {icon: <SchoolOutlinedIcon/> , title: 'Education', route: '/education' },
    {icon: <PsychologyOutlinedIcon/> , title: 'Skills', route: '/skills' },
    {icon: <WorkOutlineOutlinedIcon/>, title: 'Profession', route: '/profession' },
    {icon: <InterestsOutlinedIcon/> , title: 'Interests', route: '/interests' },
    {icon: <CollectionsBookmarkOutlinedIcon/> , title: 'Blogs', route: '/blogs' },
    {icon: <ContactPageOutlinedIcon/> , title: 'Contact', route: '/contact' },
]