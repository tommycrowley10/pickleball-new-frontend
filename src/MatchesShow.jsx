export function MatchesShow({ match }) {
  return (
    <div>
      <h1>Match information</h1>
      <p>Team 1 Player 1: {match.name}</p>
      <p>Team 1 Player 2: {match.name}</p>
      <p>Team 1 score: {match.score}</p>
      <p>Team 2 Player 1: {match.name}</p>
      <p>Team 2 Player 2: {match.name}</p>
      <p>Team 2 score: {match.score}</p>
    </div>
  );
}
