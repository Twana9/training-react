import axios from "axios";
import { useEffect, useState } from "react";

export default function GetTwoSinglePost() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/9`)
      .then((res) => setPost(res.data.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>
            {post.first_name} :: {post.last_name}
          </h2>
          <h3>{post.email}</h3>
          <img src={post.avatar} alt="" />
        </div>
      )}
    </>
  );
}
