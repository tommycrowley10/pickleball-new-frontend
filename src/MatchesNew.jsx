export function MatchesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Match</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Team 1 Player 1: <input name="team_one_player_one" type="text" />
        </div>
        <div>
          Team 1 Player 2: <input name="team_one_player_two" type="text" />
        </div>
        <div>
          Team 1 score: <input name="team_one_score" type="number" />
        </div>
        <div>
          Team 2 Player 1: <input name="team_two_player_one" type="text" />
        </div>
        <div>
          Team 2 Player 2: <input name="team_two_player_two" type="text" />
        </div>
        <div>
          Team 2 score: <input name="team_two_score" type="number" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
