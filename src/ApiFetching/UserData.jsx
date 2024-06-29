import axios from "axios";
import { useEffect, useState } from "react";

export default function UserData() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {})
      .finally(() => setIsLoading(false));
  }, []);
  function deleteUser(userID) {
    axios
      .delete(`https://reqres.in/api/users/${userID}`)
      .then((res) => {
        setUsers(users.filter((user) => user.id !== userID));
      })
      .catch((err) => {});
  }
  function updateUser(userID) {
    const updatedUser = {
      first_name: "twana",
      last_name: "koye",
      email: "twana@gmail.com",
    };
    setUpdatingUser(userID);
    axios
      .put(`https://reqres.in/api/users/${userID}`, updatedUser)
      .then((res) => {
        setUsers(
          users.map((user) => {
            if (user.id === userID) return { ...user, ...res.data };
            else return user;
          })
        );
        setUpdatingUser(null);
      })
      .catch((err) => setUpdatingUser(null));
  }
  return (
    <>
      <h1>Hello ReqRes users</h1>
      {isLoading ? (
        <h1>Loading Users...</h1>
      ) : (
        <div>
          {users.length &&
            users.map((user) => (
              <div key={user.id}>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <img src={user.avatar} />
                <p>{user.email}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button
                  onClick={() => updateUser(user.id)}
                  disabled={updatingUser === user.id}
                >
                  {updatingUser === user.id ? "Updating" : "Update"}
                </button>
                <hr />
              </div>
            ))}
        </div>
      )}
    </>
  );
}
