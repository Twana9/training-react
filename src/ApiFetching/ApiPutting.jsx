import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiPutting() {
  const [post, setPost] = useState({
    name: "twana",
    title: "programmer",
  });
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setPost({ ...post, name: e.target.value })}
        value={post.name}
      />
      <input
        type="text"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />
      <button>Submit</button>
    </form>
  );
}
