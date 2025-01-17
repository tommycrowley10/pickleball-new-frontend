import { useLoaderData, useNavigate } from "react-router-dom";

import { MatchesIndex } from "./MatchesIndex";

export function MatchesIndexPage() {
  const matches = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (match) => {
    console.log("handleShow", match);
    navigate(`/matches/${match.id}`);
  };

  return (
    <div>
      <MatchesIndex matches={matches} onShow={handleShow} />
    </div>
  );
}
