import React from 'react';
import '../styles/SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function SendMail() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch();
  const colRef = collection(db, 'emails');
  const onSubmit = (data) => {
    addDoc(colRef, {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp(),
    })
    dispatch(closeSendMessage());
  };
  
  return (
    <div className='send-mail'>
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className='send-mail-close' />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' 
               placeholder='To' 
               type="email"
               {...register("to", {required: "To is required!"})} 
        />
        {errors.to && <p className='send-mail-error'>To is required</p>}
        <input name='subject' 
               placeholder='Subject' 
               type="text"
               {...register("subject", {required: "Subject is required!"})} 
        />
        {errors.subject && <p className='send-mail-error'>Subject is required</p>}
        <input name='message' 
               placeholder='Message' 
               type="text" 
               className='send-mail-message'
               {...register("message", {required: "Message is required!"})} 
        />
        {errors.message && <p className='send-mail-error'>Message is required</p>}
        <div className="send-mail-options">
          <Button className='send-mail-send'
                  variant='container'
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

export default SendMail;