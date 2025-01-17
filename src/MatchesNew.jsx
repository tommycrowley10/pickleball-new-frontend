import axios from "axios";
import { useState, useEffect } from "react";

export function MatchesNew({ onCreate }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // To store validation error messages

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    const params = new FormData(event.target);

    // If validation passes, create the match
    onCreate(params, () => event.target.reset());
  };

  const handleUsersIndex = () => {
    axios.get("/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(handleUsersIndex, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create a New Match</h1>

        {/* Display Error Message if Validation Fails */}
        {error && <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg border-l-4 border-red-500">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team 1 Player 1 */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 1 Player 1:</label>
            <select
              name="team_one_player_one"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled selected value>
                -- Select an Option --
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team 1 Player 2 */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 1 Player 2:</label>
            <select
              name="team_one_player_two"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled selected value>
                -- Select an Option --
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team 1 Score */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 1 Score:</label>
            <input
              name="team_one_score"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              max="20" // To avoid excessively large scores
            />
          </div>

          {/* Team 2 Player 1 */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 2 Player 1:</label>
            <select
              name="team_two_player_one"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled selected value>
                -- Select an Option --
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team 2 Player 2 */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 2 Player 2:</label>
            <select
              name="team_two_player_two"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled selected value>
                -- Select an Option --
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team 2 Score */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Team 2 Score:</label>
            <input
              name="team_two_score"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              max="20" // To avoid excessively large scores
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition-all"
            >
              Create Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
