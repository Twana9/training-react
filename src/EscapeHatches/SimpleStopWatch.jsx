import { useState, useRef } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const intervalRef = useRef(null);

  function start() {
    setStartTime(new Date());
    setCurrentTime(new Date());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 10);
  }
  function stop() {
    clearInterval(intervalRef.current);
  }
  let seconds = 0;
  if (startTime !== null && currentTime !== null) {
    seconds = (currentTime - startTime) / 1000;
  }
  return (
    <>
      <p>{seconds.toFixed(0)}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

// export default function StopWatch() {
//   const [currentTime, setCurrentTime] = useState(0);
//   const StartTimeRef = useRef(0);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     StartTimeRef.current = new Date();
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 10);
//   }
//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   return (
//     <>
//       <p>{(currentTime - StartTimeRef.current) / 1000} </p>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }
