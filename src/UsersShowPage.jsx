import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { UsersShow } from "./UsersShow";

export function UsersShowPage() {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (user, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/users/${user.id}.json`, params).then(() => {
      navigate("/users");
    });
  };

  const handleDestroy = (user) => {
    console.log("handleDestroy", user);
    axios.delete(`/users/${user.id}.json`).then(() => {
      navigate("/users");
    });
  };

  return (
    <div>
      <UsersShow user={user} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
