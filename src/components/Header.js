import React from 'react';
import '../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import logo from '../logo.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const exitAccount = () => {
    signOut(auth).then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className='header'>
        {/* menu icon and logo */}
        <div className='header-left'>
          {/* the IconButton tag adds some default styles */}
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src={logo} 
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
          <IconButton onClick={exitAccount}>
            <PowerSettingsNewIcon />
          </IconButton>
          <Avatar src={user?.photoURL}/>
        </div>
    </div>
  )
}

export default Header