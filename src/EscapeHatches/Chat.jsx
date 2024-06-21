import { useRef, useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert("sending: " + textRef.current);
    }, 5000);
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
