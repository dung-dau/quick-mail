import '../styles/Sidebar.css';

import React from 'react'
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import { setStarredTrue, setStarredFalse } from '../features/starredSlice';

function Sidebar() {
  // the dispatcher that allows the component to access the 
  // state for the new Message box
  const dispatch = useDispatch();

  return <div className='sidebar'>
      {/* Uppercase B means MUI button */}
      {/* startIcon attribute adds an icon component */}
      {/* compose button */}
      <Button startIcon={<AddIcon fontSize='large' />}
              className='sidebar-compose'
              // sends the action to the dispatcher when clicking
              // the compose button
              onClick={() => dispatch(openSendMessage())}
      >
          Compose
      </Button>
      {/* Inbox button */}

      <Button startIcon={<InboxIcon />}
              onClick={() => {
                dispatch(setStarredFalse())
              }}
              className='sidebar-option'
      >
        Inbox
      </Button>
      <Button startIcon={<StarIcon/>}
              onClick={() => {
                dispatch(setStarredTrue())
              }}
              className='sidebar-option'
      >
        Starred
      </Button>

      {/* bottom 3 icons underneath the sidebar */}
      <div className='sidebar-footer'>
        <div className='sidebar-footer-icons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>

        </div>
      </div>
  </div>
}

export default Sidebar