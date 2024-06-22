import { useState, useRef, forwardRef } from "react";

export default function Forward() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
