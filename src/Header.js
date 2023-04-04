import React, { useState } from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link,useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Header({tite}) {
  const histroy = useNavigate();
  return (
    <div className="header">
      { tite ? <Link to="/">
        <IconButton>
      <PersonIcon className="header_icon" fontSize="large" color="black"/>
      </IconButton>
      </Link> : <Link to="/">
        <IconButton onClick={()=> histroy('/')}>
      <ArrowBackIosIcon  className="header_icon" fontSize="large" color="black"/>
      </IconButton>
      </Link>}
      <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.jpg" alt="tinder logo"/>
      <Link to="/chats">
      <IconButton>
      <ForumIcon className="header_icon" fontSize="large"/>
      </IconButton>
      </Link>
    </div>
  )
}

