import { useState, useEffect } from "react";
import axios from "axios";
export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [errorb, setErrorb] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respond) => {
        console.log(respond);
        setPosts(respond.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorb(error.message);
      });
  }, []);

  return (
    <>
      {errorb ? (
        <p>{errorb}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
