import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";
import { Modal } from "./Modal";
import { UsersShow } from "./UsersShow";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleShow = (user) => {
    console.log("handleShow", user);
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };

  const handleUpdate = (user, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/users/${user.id}.json`, params).then((response) => {
      setUsers(
        users.map((p) => {
          if (p.id === response.data.id) {
            return response.data;
          } else {
            return p;
          }
        })
      );
      successCallback();
      setIsUsersShowVisible(false);
    });
  };

  const handleDestroy = (user) => {
    console.log("handleDestroy", user);
    axios.delete(`/users/${user.id}.json`).then(() => {
      setUsers(users.filter((p) => p.id !== user.id));
      setIsUsersShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersNew onCreate={handleCreate} />
      <UsersIndex users={users} onShow={handleShow} />
      <Modal show={isUsersShowVisible} onClose={() => setIsUsersShowVisible(false)}>
        <UsersShow user={currentUser} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
