import '../styles/SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/counter/mailSlice';

import React from 'react'
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../firebase.js';

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  // sets up the dispatcher
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const colRef = collection(db, 'email')
    addDoc(colRef, {
      // to: formData.to,
      // subject: formData.subject,
      // message: formData.message
    });
    // calls the dispatcher to change the state to closed
    dispatch(closeSendMessage())
    console.log(formData)
    console.log(formData.subject);
  }

  return (
    <div className='send-mail'>
        <div className="send-mail-header">
            <h3>New Message</h3>
            <CloseIcon 
                  className='send-mail-close'
                  // calls the closeSendMessage() function through
                  // the dispattcher to access the state to change the
                  // state to remove the New Message box
                  onClick={() => dispatch(closeSendMessage())} 
            />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type="email" />
            <input name='subject' placeholder='Subject' type="text" />
            <input name='message' placeholder='Message' type="text" className='send-mail-message' />
            <div className="send-mail-options">
                <Button 
                    className='send-mail-send'
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                  Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail