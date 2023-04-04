import React from 'react';
import Header from './Header';
import './Chat.css';
import Messagetab from './Messagetab';

function Chat() {
  return (
    <div>
         <Header tite={false}/>
         <div className="chats">
          <Messagetab
          name="Mark"
          message="Yo whats up!"
          timeStamp="40 seconds ago"
          profilePic="https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg"/>  
          <Messagetab
          name="Ellen"
          message="whats up!"
          timeStamp="60 secods ago"
          profilePic="https://www.whitehouse.gov/wp-content/uploads/2021/01/eo_1-1.jpg"/>  
          <Messagetab
          name="Sandra"
          message="ola!"
          timeStamp="1 min ago"
          profilePic="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/381_halilovic.jpg"/>  
          <Messagetab
          name="Natasha"
          message="oops there is he.."
          timeStamp="5 secods ago"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxPh2XwlaY0G1S3KE1mri2Ua4fmeDrFsE1YmMsyzXgLCXc5CdEPyBeFa-c5NJCMgDbe8&usqp=CAU"/>  
         </div>

    </div>
  )
}

export default Chat
