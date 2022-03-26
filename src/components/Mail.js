import React from 'react';
import '../styles/Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon  from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { selectOpenMail } from '../features/mailSlice';
import { useSelector } from 'react-redux';

// To view the actual mail
function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className='mail'>
      {/* contains the tool bar for the mail */}
      <div className="mail-tools">
        {/* contains the first 9 icons */}
        <div className="mail-tools-left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon /> 
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        {/* contains the last 3 icons */}
        <div className="mails-tools-right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      {/* contains the mail title, subject, time and message */}
      <div className="mail-body">
        {/* the header contains the subject, title and time */}
        <div className="mail-body-header">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className='mail-important'/>
          <p>{selectedMail?.title}</p>
          <p className='mail-time'>{selectedMail?.time}</p>
        </div>
        {/* contains the message */}
        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail