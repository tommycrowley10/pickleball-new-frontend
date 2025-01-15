import { useLoaderData, useNavigate } from "react-router-dom";

import { MatchesIndex } from "./MatchesIndex";

export function MatchesIndexPage() {
  const matches = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (photo) => {
    console.log("handleShow", photo);
    navigate(`/matches/${photo.id}`);
  };

  return (
    <div>
      <MatchesIndex matches={matches} onShow={handleShow} />
    </div>
  );
}
