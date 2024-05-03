import React,{useState,useEffect} from 'react';
//import { MAX, MIN } from "../constants";


function Progressbar({value}) {
    const [percent, setPercent] = useState(value);
    const[complete,setComplete] = useState(false);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(value,0)));
        if(value>=100){
            setComplete(true);
        }
    },[value]);
  return (
    <>
    <div className="progress">
        <span style={{color : percent<49 ? 'black':'white'}}>{percent.toFixed()}%</span>
        <div style={{width: `${percent}%`}}/>
    </div>
    <div>
        <span>{complete ? 'Completed!': 'Loading...'}</span>
    </div>
    </>
  )
}

export default Progressbar