import { useLoaderData, useNavigate } from "react-router-dom";

import { UsersIndex } from "./UsersIndex";

export function UsersIndexPage() {
  const users = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (photo) => {
    console.log("handleShow", photo);
    navigate(`/users/${photo.id}`);
  };

  return (
    <div>
      <UsersIndex users={users} onShow={handleShow} />
    </div>
  );
}
