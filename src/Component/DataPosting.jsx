import { useState } from "react";
import axios from "axios";
export default function Form() {
  const [post, setPost] = useState({
    name: "",
    title: "",
  });
  const [error, setError] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <button>Submit</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
}
