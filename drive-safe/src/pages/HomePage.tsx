import { Box, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    const [isCalculating, setIsCalculating] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
  
    const handleButtonClick = () => {
      if (isCalculating) return;
  
      setIsCalculating(true);
      setTimer(0);
  
      setTimeout(() => {
        setIsRunning(!isRunning);
        setIsCalculating(false);
      }, 1000);
    };
  
    useEffect(() => {
      let interval: string | number | NodeJS.Timeout | undefined;
      if (isRunning) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [isRunning]);
  
    const formatTime = (time: number) => {
      const hours = Math.floor(time / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  
      return `${hours}:${minutes}:${seconds}`;
    };

  return (
    <div className="app">

      <main className="app-content">
        <div className="circle-container">
          <button
            className={`circle ${isCalculating ? 'calculating' : ''}`}
            onClick={handleButtonClick}
          >
            <div className="circle-inner">
              {isCalculating ? (
                <div className="spinner"></div>
              ) : (
                <div className="button-text">
                  {isRunning ? formatTime(timer) : 'New trip'}
                </div>
              )}
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;