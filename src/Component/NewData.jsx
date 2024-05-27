/////////////////////////////////////////////////////
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Data() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Added loading state

//   useEffect(() => {
//     setIsLoading(true); // Set loading state to true initially
//     axios
//       .get("https://reqres.in/api/users")
//       .then((res) => {
//         setUsers(res.data.data);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setIsLoading(false)); // Set loading state to false after fetching
//   }, []);

//   function deleteUser(userID) {
//     axios
//       .delete(`https://reqres.in/api/users/${userID}`)
//       .then((res) => {
//         // Optimistic update (consider error handling for a more robust solution)
//         setUsers(users.filter((user) => user.id !== userID));
//       })
//       .catch((err) => console.error("Error deleting user:", err));
//   }

//   const updateUser = (userId) => {
//     const updatedUserData = {
//       first_name: "UpdatedFirstName",
//       last_name: "UpdatedLastName",
//       email: "updated.email@reqres.in",
//     };

//     axios
//       .put(`https://reqres.in/api/users/${userId}`, updatedUserData)
//       .then((response) => {
//         console.log("User updated successfully:", response.data);
//         setUsers(
//           users.map((user) =>
//             user.id === userId ? { ...user, ...response.data } : user
//           )
//         );
//       })
//       .catch((error) => {
//         console.error("Error updating user:", error);
//         // Implement error handling (e.g., display an error message to the user)
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Hello ReqRes users!</h1>
//       {isLoading ? (
//         <p>Loading users...</p> // Display loading message while fetching data
//       ) : (
//         <div className="flex">
//           {users.length &&
//             users.map((user) => (
//               <div key={user.id}>
//                 <p>
//                   <strong>{user.first_name}</strong>
//                 </p>
//                 {user && (
//                   <>
//                     <button onClick={() => updateUser(user.id)}>Update</button>
//                     <button onClick={() => deleteUser(user.id)}>Delete</button>
//                   </>
//                 )}
//                 <p>{user.email}</p>
//                 <img
//                   key={user.avatar}
//                   src={user.avatar}
//                   alt={user.first_name}
//                 />
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }
import axios from "axios";
import { useState, useEffect } from "react";

export default function Data() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [updatingUser, setUpdatingUser] = useState(null); // Added for update loading

  useEffect(() => {
    setIsLoading(true); // Set loading state to true initially
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false)); // Set loading state to false after fetching
  }, []);

  function deleteUser(userID) {
    axios
      .delete(`https://reqres.in/api/users/${userID}`)
      .then((res) => {
        // Optimistic update (consider error handling for a more robust solution)
        setUsers(users.filter((user) => user.id !== userID));
      })
      .catch((err) => console.error("Error deleting user:", err));
  }

  const updateUser = (userId) => {
    const updatedUserData = {
      first_name: "UpdatedFirstName",
      last_name: "UpdatedLastName",
      email: "updated.email@reqres.in",
    };

    setUpdatingUser(userId); // Set updating user ID

    axios
      .put(`https://reqres.in/api/users/${userId}`, updatedUserData)
      .then((response) => {
        console.log("User updated successfully:", response.data);
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, ...response.data } : user
          )
        );
        setUpdatingUser(null); // Reset updating user ID
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Implement error handling (e.g., display an error message to the user)
        setUpdatingUser(null); // Reset updating user ID even on error
      });
  };

  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      {isLoading ? (
        <p>Loading users...</p> // Display loading message while fetching data
      ) : (
        <div className="flex">
          {users.length &&
            users.map((user) => (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                {user && (
                  <>
                    <button
                      onClick={() => updateUser(user.id)}
                      disabled={updatingUser === user.id} // Disable button while updating
                    >
                      {updatingUser === user.id ? (
                        <span>Updating...</span> // Display loading indicator while updating
                      ) : (
                        <span>Update</span>
                      )}
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </>
                )}
                <p>{user.email}</p>
                <img
                  key={user.avatar}
                  src={user.avatar}
                  alt={user.first_name}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
