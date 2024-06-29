import axios from "axios";
import { useState } from "react";

export default function PostTwoSinglePost() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  function handlePost() {
    axios
      .post(`https://reqres.in/api/users`, {
        name: "twana",
        job: "programmer",
        lorem: "lorem",
      })
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        setError(err.status);
      });
  }

  return (
    <>
      <button onClick={handlePost}>Post</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{post.name}</h2>
          <h2>{post.job}</h2>
        </div>
      )}
    </>
  );
}
