// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Delete() {
//   const [post, setPost] = useState("");
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/posts/1`)
//       .then((res) => {
//         console.log(res.status);
//         setPost(res.status);
//       })
//       .catch((err) => {
//         console.log(err.message);
//         setError(err.message);
//       });
//   }, []);
//   return <>{error ? <h2>{error}</h2> : <h2>{post}</h2>}</>;
// }
import axios from "axios";
import { useEffect, useState } from "react";

export default function Delete() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        console.log(res.status);
        setStatus(`Post deleted successfully with status code: ${res.status}`);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(`Error: ${err.response.status} - ${err.response.data}`);
        } else if (err.request) {
          // The request was made but no response was received
          setError("Error: No response received from server");
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${err.message}`);
        }
      });
  }, []);

  return <>{error ? <h2>{error}</h2> : <h2>{status}</h2>}</>;
}
