import axios from "axios";
import { useState, useEffect } from "react";
import { MatchesIndex } from "./MatchesIndex";
import { MatchesNew } from "./MatchesNew";
import { Modal } from "./Modal";
import { MatchesShow } from "./MatchesShow";

export function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [isMatchesShowVisible, setIsMatchesShowVisible] = useState(false);
  const [currentMatch, setCurrentMatch] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/matches.json").then((response) => {
      console.log(response.data);
      setMatches(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/matches.json", params).then((response) => {
      setMatches([...matches, response.data]);
      successCallback();
    });
  };

  const handleShow = (match) => {
    console.log("handleShow", match);
    setIsMatchesShowVisible(true);
    setCurrentMatch(match);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <MatchesNew onCreate={handleCreate} />
      <MatchesIndex matches={matches} onShow={handleShow} />
      <Modal show={isMatchesShowVisible} onClose={() => setIsMatchesShowVisible(false)}>
        <MatchesShow match={currentMatch} />
      </Modal>
    </main>
  );
}
