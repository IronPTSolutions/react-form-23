import { useState } from "react";
import Form from "./Form";
import User from "./User";

const defaultUsers = [
  {
    name: "Julio",
    surname: "García",
    email: "julio@example.com",
    password: "123456",
  },
  {
    name: "Cristian",
    surname: "Arranz",
    email: "cristian@example.com",
    password: "123456",
  },
];

function UserList() {
  const [users, setUsers] = useState(defaultUsers);

  const addUser = (user) => {
    setUsers([user, ...users]);
  };

  return (
    <div>
      <Form addUser={addUser} />

      {users.map((user) => (
        <User key={user.email} {...user} />
      ))}
    </div>
  );
}

export default UserList;
