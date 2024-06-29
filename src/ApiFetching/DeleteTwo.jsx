import axios from "axios";
import { useState } from "react";

export default function DeleteTwo() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  function handleDelete() {
    axios
      .delete("https://reqres.in/api/users/2")
      .then((res) => {
        setPost(res);
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
      {error ? <p>{error}</p> : <h2>{post.status}</h2>}
    </>
  );
}
