import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import "./Home.css";
import database from "./firebase";
import SwipeButtons from "./SwipeButtons"; 
import Header from './Header';



export const Home= () =>{
  const [people, setPeople] = useState([]);
  const [isLoading,setisLoading] = useState(false);

  useEffect(()=>{
    const unsubscribe=database.collection('People').onSnapshot((snapshot)=> setPeople(
        snapshot.docs.map(doc => doc.data())
    ));

    setisLoading(true);
    return ()=> {
      unsubscribe();
    }
  },[]);

return (
    <div>
       <Header tite={true}/>
      <h1>Tinder cards</h1>
      <div className='tindercard_wrapher'>
      {people.map((person)=>{
        return (<TinderCard className="swipe" key={person.name}
        preventSwipe={['up','down']}>
            <div className="card" style={{backgroundImage:`url(${person.url})`}}>
                <h3>{person.name}</h3>
            </div>
        </TinderCard>);
      })}
      <SwipeButtons/>
      </div>
    </div>);
  
}

export default Home;
