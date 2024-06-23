import axios from "axios";
import { useEffect, useState } from "react";

export default function FirstPost() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
