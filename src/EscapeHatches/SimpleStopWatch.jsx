import { useState, useRef } from "react";

export default function StopWatch() {
  const [currentTime, setCurrentTime] = useState(0);
  const StartTimeRef = useRef(0);
  const intervalRef = useRef(null);

  function handleStart() {
    StartTimeRef.current = new Date();
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <p>{(currentTime - StartTimeRef.current) / 1000} </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
