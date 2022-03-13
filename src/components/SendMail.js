import '../styles/SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

import React from 'react'

function SendMail() {
  return (
    <div className='send-mail'>
        <div className="send-mail-header">
            <h3>New Message</h3>
            <CloseIcon className='send-mail-close' />
        </div>
        <form>
            <input placeholder='To' type="text" />
            <input placeholder='Subject' type="text" />
            <input placeholder='Message' type="text" className='send-mail-message' />
            <div className="send-mail-options">
                <Button className='send-mail-send'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail