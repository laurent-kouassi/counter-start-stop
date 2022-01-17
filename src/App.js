import logo from './logo.svg';
import './App.css';
import { Timer } from './Timer';
import { useEffect } from 'react';

function App() {
  const { 
    seconds, 
    start, 
    stop, 
    pause, 
    reset, 
    running} = Timer();


    useEffect(() => {
      // stop decreasing when time is up
      if(seconds == 0) pause();

    }, [seconds]);

  return (
    <div className="App">
      <div style = {{marginTop: '20px'}}>
        <button onClick = { running ? pause : start }> START/PAUSE </button>
        <button onClick = { reset }> RESET </button>
        <button onClick = { stop }> STOP </button>
      </div>
      <span>{seconds}</span>
    </div>
  );
}

export default App;
