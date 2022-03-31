import { Checkbox } from '@mui/material'
import React from 'react';
import '../styles/EmailRow.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import StarIcon from '@mui/icons-material/Star';
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';

function EmailRow({id, title, subject, description, starred, time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const docRef = doc(db, 'emails', id);
    const [selected, setSelected] = useState(starred)
    
    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }))
        navigate("/mail")
    }
  return (
    <div className='email-row'>
        {/* icons that represent the select and star options */}
        <div className="email-row-options">
            <Checkbox />
            <ToggleButton
                value="starred"
                selected={selected}
                color="warning"
                onChange={() => {
                    setSelected(!selected)
                    updateDoc(docRef, {
                        starred: !selected
                    })
                }}
            >
                <StarIcon />
            </ToggleButton>
        </div>
        <div className='email-container' onClick={openMail}>
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
    </div>
  )
}

export default EmailRow