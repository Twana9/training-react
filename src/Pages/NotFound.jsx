import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Error  Not a Page" });
    }, 2000);
  }, []);
  return <h1>Not Found</h1>;
}

// useEffect(() => {
//   setTimeout(() => {
//     navigate("/", { state: "not containted" });
//   }, 1000);
// }, []);

// return <Navigate to="/" />;
