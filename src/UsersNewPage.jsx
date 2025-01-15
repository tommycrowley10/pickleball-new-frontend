import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UsersNew } from "./UsersNew";

export function UsersNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("/users.json", params).then((response) => {
      console.log(response);
      navigate("/users");
    });
  };

  return (
    <div>
      <UsersNew onCreate={handleCreate} />
    </div>
  );
}
