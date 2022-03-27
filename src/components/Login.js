import React from 'react';
import '../styles/Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import logo from '../logo.png';

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
      signInWithPopup(auth, provider).then(({user}) => {
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
      }).catch(error => alert(error.message))
  }
  return (
    <div className='login'>
        <div className="login-container">
            <img 
              src={logo}
              alt=''
            />
            <Button 
              variant='contained' 
              onClick={signIn}
              color='primary'
              size='medium'
              className='login-button'
            >
                Login With Google
            </Button>
        </div>
    </div>
  )
}

export default Login