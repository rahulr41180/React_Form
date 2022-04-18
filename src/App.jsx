
import './App.css';

import { Form } from "./components/form";

import { useState,useEffect,useRef } from "react";
function App() {
  const [counter,setcounter] = useState(0);
  const counterRef = useRef(null);

  const divref = useRef();

  useEffect(() =>{
    StartInterval();
  },[]);

  const StartInterval = () =>{
    counterRef.current = setInterval(() =>{
      setcounter((p) => p+1)
    },500);
  }

  console.log("x is ")
  return (
    <div className="App">
      <h4>Counter : {counter}</h4>
      <button onClick={() =>{
        clearInterval(counterRef.current);
      }}>Pause</button>
      <Form />
      <button onClick={() =>{
        StartInterval();
      }}>start</button>
      <button onClick={() =>{

        clearInterval(counterRef.current);
        setcounter(0);
      }}>Reset</button>
    </div>
  );
}

export default App;
