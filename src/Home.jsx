import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/5b50d1d9266c075ec51689ce/9ad38a7b-f3c5-4802-a9a6-9f33013e37f2/where-to-play-pickleball')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-8">
        <div>
          <p className="text-4xl sm:text-5xl font-bold mb-4">Welcome to My Pickleball App!</p>
          <p className="text-lg sm:text-xl mb-6">
            Join the community and start playing today. Find players, courts, enter scores, and more!
          </p>

          <Link to="/signup">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
