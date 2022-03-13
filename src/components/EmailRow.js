import LabelImportantOutlinedIcon  from '@mui/icons-material/LabelImportantOutlined';
import { IconButton, Checkbox } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React from 'react';
import '../styles/EmailRow.css';
import {useNavigate} from 'react-router-dom';

function EmailRow({id, title, subject, description, time}) {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/mail")} className='email-row'>
        {/* icons that represent the select, star and important options */}
        <div className="email-row-options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        {/* where the title of the email is placed */}
        <h3 className="email-row-title">{title}</h3>
        {/* The title section */}
        <div className="email-row-message">
            <h4>
                {/* the actual title */}
                {subject}
                {/* grey text of description */}
                <span className="email-row-description">
                    {description}
                </span>
            </h4>
        </div>
        {/* shows the time on the right */}
        <p className="email-row-time">{time}</p>

    </div>
  )
}

export default EmailRow