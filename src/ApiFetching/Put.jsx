import axios from "axios";
import { useState } from "react";

export default function Put() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  function handleClick() {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1`, {
        title: "aa",
        body: "bb",
      })
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }

  return (
    <>
      <button onClick={handleClick}>Put</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <h2>{post.body}</h2>
        </div>
      )}
    </>
  );
}
