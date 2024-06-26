import axios from "axios";
import { useEffect, useState } from "react";
export default function SinglePost() {
  const [postComment, setPostComment] = useState([]);
  const [selectedID, setSelectedID] = useState(1);
  const [error, setError] = useState(null);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${idFromButton}/comments`
      )
      .then((res) => {
        console.log(res.data);
        setPostComment(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [idFromButton]);
  function handleClick() {
    setIdFromButton(selectedID);
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
      <button onClick={handleClick}>Get</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>Post Comments</p>
          <br />
          <ul>
            {postComment.map((c) => (
              <li key={c.id}>
                <p>{c.name}</p>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
