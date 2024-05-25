import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }
  if (status === "sent") {
    return <p>thanks for sending feedback</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          disabled={status === "sending"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={status === "sending" || text.length === 0}>
          Send
        </button>
      </form>
      {status === "sending" && <p>sending . . .</p>}
    </>
  );

  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  }
}
