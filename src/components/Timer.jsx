import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import '../App.css'

function Timer() {
  const {
    seconds,
    minutes,
    start,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <div className='timer' style={{textAlign: 'center'}}>
      <div style={{fontSize: '1.5rem', color:'black'}}>
        
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  }
export default Timer;
