import axios from "axios";
import { useEffect, useState } from "react";

export default function GetTwo() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=2`)
      .then((res) => {
        console.log(res);
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.first_name} </h2>
          <h2>{post.last_name} </h2>
          <h3>{post.email}</h3>
          <img src={post.avatar} />
          <hr />
        </div>
      ))}
    </>
  );
}
