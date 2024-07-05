import { useParams } from "react-router-dom";
import { users } from "./usersData";

export function User() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  return (
    <>
      {user ? (
        <div>
          <h1>{user.user}</h1>
          <h2>{user.email}</h2>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
}
