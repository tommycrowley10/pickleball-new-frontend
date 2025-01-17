import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email"); // Remove email from localStorage
      window.location.href = "/"; // Redirect to homepage after logout
    });
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-800 via-blue-500 to-purple-600 flex items-center justify-center">
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">You have successfully logged out!</h1>
        <p className="text-lg text-gray-600 mb-8">Thank you for visiting our website. Hope to see you again soon!</p>

        {/* Logout Button */}
        <button
          onClick={handleClick}
          className="py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
