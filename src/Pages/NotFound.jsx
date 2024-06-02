import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "not containted" });
    }, 1000);
  }, []);
  return <h1>not found</h1>;
}

// return <Navigate to="/" />;
