import axios from "axios";
import { useEffect, useState } from "react";
export default function SinglePost() {
  const [post, setPost] = useState({});
  const [selectedID, setSelectedID] = useState(1);
  const [error, setError] = useState(null);
  const [formID, setFormID] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${formID}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [formID]);
  function handleClick(ID) {
    setFormID(ID);
  }
  return (
    <>
      <input
        value={selectedID}
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          if (value === "" || (Number(value) > 0 && Number(value) <= 100))
            setSelectedID(Number(value) || "");
        }}
      />
      <button onClick={() => handleClick(selectedID)}>Get</button>
      {error ? <p>{error}</p> : <div>{post.title}</div>}
    </>
  );
}
