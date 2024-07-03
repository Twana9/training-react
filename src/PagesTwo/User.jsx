import { useParams } from "react-router-dom";
import { users } from "./usersData";

export function User() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  return <>{user ? <h1>{user.user}</h1> : <p>User not found</p>}</>;
}
