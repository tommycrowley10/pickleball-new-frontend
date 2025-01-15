import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { MatchesShow } from "./MatchesShow";

export function MatchesShowPage() {
  const match = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (match, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/matches/${match.id}.json`, params).then(() => {
      navigate("/matches");
    });
  };

  const handleDestroy = (match) => {
    console.log("handleDestroy", match);
    axios.delete(`/matches/${match.id}.json`).then(() => {
      navigate("/matches");
    });
  };

  return (
    <div>
      <MatchesShow match={match} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
