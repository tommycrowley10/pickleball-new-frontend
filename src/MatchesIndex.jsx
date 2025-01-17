export function MatchesIndex({ matches, onShow }) {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
        All matches ({matches.length} total)
      </h1>

      {matches.map((match) => {
        // Compare the scores
        const teamOneScoreClass = match.team_one_score > match.team_two_score ? "text-green-500" : "text-red-500";
        const teamTwoScoreClass = match.team_two_score > match.team_one_score ? "text-green-500" : "text-red-500";

        // Determine which team has the higher score
        const teamOneHasHigherScore = match.team_one_score > match.team_two_score;
        const teamTwoHasHigherScore = match.team_two_score > match.team_one_score;

        return (
          <div
            key={match.id}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <div className="space-y-4">
              {/* Team 1 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-600">Team 1:</h2>
                <h4 className="text-lg text-gray-800">
                  {match.team_one_player_one?.name} & {match.team_one_player_two?.name}
                </h4>
                <p className={`text-md ${teamOneScoreClass}`}>
                  Score: {match.team_one_score} {teamOneHasHigherScore && <span className="text-yellow-500">★</span>}
                </p>
              </div>

              {/* Team 2 (using the same blue color as Team 1) */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-600">Team 2:</h2>
                <h4 className="text-lg text-gray-800">
                  {match.team_two_player_one?.name} & {match.team_two_player_two?.name}
                </h4>
                <p className={`text-md ${teamTwoScoreClass}`}>
                  Score: {match.team_two_score} {teamTwoHasHigherScore && <span className="text-yellow-500">★</span>}
                </p>
              </div>

              <button
                onClick={() => onShow(match)}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                More info
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
