import React, { useEffect, useState } from 'react';
import './App.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => (num < 10 ? '0' + num : num);

  return (
    <div className="clock-container">
      <h1 className="clock-heading">Digital Clock</h1>
      <div className="clock">
        {formatTime(time.getHours())}:
        {formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </div>
    </div>
  );
};

export default Clock;
