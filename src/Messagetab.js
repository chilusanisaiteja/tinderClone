import React from 'react';
import { Avatar } from '@mui/material';
import "./Messagetab.css";
import {Link} from 'react-router-dom';

function Messagetab(props) {
  return (
    <Link to={`/chats/${props.name}`}>
    <div className="chat">
      <Avatar className="chat_image" alt={props.name} src={props.profilePic}/>
    <div className="chat_details">
    <h2>{props.name}</h2>
    <p>{props.message}</p>
    </div>
    <p className="chat_timeStamp">{props.timeStamp}</p>
    </div>
    </Link>
  );
}

export default Messagetab
