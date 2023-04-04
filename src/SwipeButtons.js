import React from 'react';
import "./SwipeButtons.css";
import { MdReplay,MdFavorite} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
import {FcFlashOn} from 'react-icons/fc';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className="swipebuttons">
      <IconButton>
      <MdReplay className='replay icon1'/>
      </IconButton>
      <IconButton>
      <IoMdClose className='replay icon2'/>
      </IconButton>
      <IconButton>
      <AiFillStar className='replay icon3'/>
      </IconButton>
      <IconButton>
      <MdFavorite className='replay icon4'/>
      </IconButton>
      <IconButton>
      <FcFlashOn className='replay icon5'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons;
