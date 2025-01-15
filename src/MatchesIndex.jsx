export function MatchesIndex({ matches, onShow }) {
  return (
    <div>
      <h1>All matches ({matches.length} total)</h1>
      {matches.map((match) => (
        <div key={match.id}>
          <h2>Team 1</h2>
          <h4>
            {match.team_one_player_one.name} & {match.team_one_player_two.name}
          </h4>
          <p>Score: {match.team_one_score}</p>
          <h2>Team 2</h2>
          <h4>
            {match.team_two_player_one.name} & {match.team_two_player_two.name}
          </h4>
          <p>Score: {match.team_two_score}</p>
          <button onClick={() => onShow(match)}>More info</button>
        </div>
      ))}
    </div>
  );
}

import { Map, Marker } from "pigeon-maps";
<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
  <Marker width={50} anchor={[50.879, 4.6997]} />
</Map>;
