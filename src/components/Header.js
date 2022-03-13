import React from 'react';
import '../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
  return (
    <div className='header'>
        {/* menu icon and logo */}
        <div className='header-left'>
          {/* the IconButton tag adds some default styles */}
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src='https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy' 
               alt=''
          />
        </div>

        {/* search bar */}
        <div className='header-middle'>
          <SearchIcon />
          <input placeholder='Search mail' type='text' />
          <ArrowDropDownIcon className='header-icon-caret' />
        </div>

        {/* apps, bell buttons and the avatar */}
        <div className='header-right'>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar />

        </div>
    </div>
  )
}

export default Header