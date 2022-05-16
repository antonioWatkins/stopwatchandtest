import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch';
import {useState,useEffect} from 'react'
import Timer from './Components/Timer/Timer';
//import {app} from "../../api/routes/app"


// const  apiurl = 'http://localhost:3003'
// async function getStopwatch(){
//   const response =await fetch(`${apiUrl}/`);
//   const json =await response.json();

//   return json.map(stopwatch => ({
//     ...Timer

//   })
// }

function App() {

   
  
  return (
    <div className='App'>
    <StopWatch />
    </div>
  );
}

export default App;
