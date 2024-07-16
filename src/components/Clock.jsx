import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center">
      {currentTime.toLocaleTimeString("bn-BD")}
    </div>
  );
}

function Calculator() {
  return (
    <>
      <h1>Hellow world</h1>
    </>
  );
}
export default Clock;
