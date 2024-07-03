import { Link } from "react-router-dom";
import { users } from "./usersData";

export function UserList() {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} style={{ textDecoration: "none" }}>
              {user.user}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
