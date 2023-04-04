import React, {useState}from 'react';
import Header from './Header';
import { Avatar } from '@mui/material';
import "./Chatscreen.css";

function Chatscreen() {
const [messageinput, setMessages] = useState([
    {
    name:'Ellen',
    image:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    message:'whats up'
    },
    {
        name:'Ellen',
        image:'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
        message:'How it going'
        },
        {
          
            message:'everything is fine'
            }

]);
const [input,setInput]=useState("");

const handleSend = e =>{
    e.preventDefault();
    setMessages([...messageinput,{message:input}]);
    setInput("");
};

  return (
    <div className="charScreen">
        <Header tite={false}/>
      <p className='text'>You Matched With Ellen On 10/12/20</p>
      { messageinput.map((mge)=>(
        mge.name?
        (<div className="chat_screen">
            <Avatar className="imag_profile" alt={mge.name} src={mge.image}/>
            <p className="chatscreentext">{mge.message}</p>
        </div>)
        : (<div className="chat_screen">
        <p className="chatscreentext1">{mge.message}</p>
    </div>)
      ))}
      <div className="input">
        <form>
            <input 
            value={input}           
            onChange={e=> setInput(e.target.value)}
            className="chat_input"
            type="text"
            placeholder='Type a message'/>
            <button onClick={handleSend} className="chat_button">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Chatscreen
