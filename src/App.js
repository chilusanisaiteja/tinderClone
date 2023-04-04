import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Chat from "./Chat";
import Chatscreen from "./Chatscreen";

export function App() {
  return (
    <div className="App">
     <h1>React tinder clone app 🚀</h1>
     <BrowserRouter>
      <Routes>
        <Route path="/chats/:person" element={<Chatscreen/>}></Route>
      <Route path="/chats" element={<Chat/>}>
      </Route>
     <Route path="/" element={<Home/>}>
     </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
