import './App.css';
import { useState,useEffect } from "react";
import Progressbar from './component/Progressbar';

function App() {
  const[value,setValue] = useState(0)
  
  useEffect(() => {
    setInterval(()=>{
      setValue((val) => val + 1);
    }, 100);
  }, []);
  
  return (
    <div className="app">
    <h1>Progress bar</h1>
      <Progressbar value={value}/>
    </div>
  );
}

export default App;
