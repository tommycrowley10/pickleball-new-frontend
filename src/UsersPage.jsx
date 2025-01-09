import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";

export function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersIndex users={users} />
    </main>
  );
}
