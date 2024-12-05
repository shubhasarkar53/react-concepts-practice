import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
 
  const [count, setCount] = useState(0);
  let timerRef = useRef(null); //declaring a speical variable 
  useEffect(() => {
    console.log("Mounted")
  }, []);


  function startTimer(){
    console.log(timerRef.current)
   if(timerRef.current!==null) return; //stop if already a clock running
   let timer = setInterval(function () {
    timerRef.current = timer;
    console.log( timerRef.current)
      setCount((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer(){
      clearInterval(timerRef.current)
      timerRef.current = null; //set the ref variable value to null
  }

  function resetTimer(){
    stopTimer();
    setCount(0);
}

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button  onClick={startTimer} >Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
