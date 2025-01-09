import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";

export function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersNew onCreate={handleCreate} />
      <UsersIndex users={users} />
    </main>
  );
}
