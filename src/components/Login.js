import React from 'react';
import '../styles/Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';

function login() {
  const signIn = () => {
      signInWithPopup(auth, provider).then(({user}) => {
          console.log(user);
      })
  }
  return (
    <div className='login'>
        <div className="login-container">
            <img 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png'
              alt=''
            />
            <Button 
              variant='contained' 
              onClick={signIn}
              color='primary'>
                Login
            </Button>
            

        </div>
    </div>
  )
}

export default login