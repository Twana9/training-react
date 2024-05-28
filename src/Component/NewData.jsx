import axios from "axios";
import { useState, useEffect } from "react";

export default function Date() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  function deleteUser(userID) {
    axios
      .delete(`https://reqres.in/api/users/${userID}`)
      .then(() => setUsers(users.filter((user) => user.id !== userID)))
      .catch((err) => console.log(err.message));
  }
  function updateUser(userID) {
    const updatedData = {
      first_name: "twana",
      last_name: "koye",
      email: "twana@koye.com",
    };
    setUpdatingUser(userID);
    axios
      .put(`https://reqres.in/api/users/${userID}`, updatedData)
      .then((res) => {
        setUsers(
          users.map((user) =>
            user.id === userID ? { ...user, ...res.data } : user
          )
        );
        setUpdatingUser(null);
      })
      .catch((err) => {
        console.log(err);
        setUpdatingUser(null);
      });
  }

  return (
    <div>
      {isLoading ? (
        <p>loading . . .</p>
      ) : (
        <div className="flex">
          <h1>hello reqres users</h1>
          {users.length &&
            users.map((user) => (
              <div className="user-cntainer" key={user.id}>
                <p>
                  {" "}
                  <b>{user.first_name}</b>
                </p>
                <img key={user.avatar} src={user.avatar} alt={user.firt_name} />
                <p>{user.email}</p>
                {user && (
                  <>
                    <button
                      onClick={() => {
                        updateUser(user.id);
                      }}
                      disabled={updatingUser === user.id}
                    >
                      {updatingUser === user.id ? (
                        <span>Updating...</span>
                      ) : (
                        <span>Update</span>
                      )}
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </>
                )}
                <hr />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
