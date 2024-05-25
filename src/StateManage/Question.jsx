import { useState } from "react";

export default function QuestionGame() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await checkAnswer(answer);
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("typing");
    }
    setAnswer("");
  }
  return (
    <>
      <p>guess the name of desert city?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={status === "submitting"}
        ></textarea>
        <button disabled={status === "submitting" || answer.length === 0}>
          submit
        </button>
        {status === "success" && <p> congrats</p>}
        {status === "submitting" && <p>submitting...</p>}
        {error !== null && status !== "submitting" && status !== "success" && (
          <p>{error.message}</p>
        )}
      </form>
    </>
  );
  function checkAnswer(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const hasError = answer.toLowerCase() !== "sand";
        if (hasError) reject(new Error("wrong answer try again"));
        else resolve();
      }, 3000);
    });
  }
}
