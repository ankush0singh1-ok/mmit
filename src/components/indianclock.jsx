import React, { useState, useEffect } from 'react';

const IndianClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every 1 second (1000 milliseconds)
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  // Format the time strictly to Indian Standard Time (IST)
  const formattedTime = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(0,0,0,0.05)',
      padding: '4px 12px',
      borderRadius: '20px',
      fontWeight: '600',
      letterSpacing: '0.5px'
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <i className="bi bi-clock-history text-warning"></i>
        <span className="text-dark">IST:</span>
      </span>
      <span className="text-dark" style={{ width: '85px', textAlign: 'left' }}>
        {formattedTime}
      </span>
    </div>
  );
};

export default IndianClock;