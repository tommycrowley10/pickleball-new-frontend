import axios from "axios";
import { useNavigate } from "react-router-dom";

import { MatchesNew } from "./MatchesNew";

export function MatchesNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("/matches.json", params).then((response) => {
      console.log(response);
      navigate("/matches");
    });
  };

  return (
    <div>
      <MatchesNew onCreate={handleCreate} />
    </div>
  );
}
