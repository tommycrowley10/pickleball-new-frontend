export function UsersIndex({ users }) {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">All Players ({users.length} total)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            {/* Random Profile Picture */}
            <img
              src={`https://picsum.photos/100?random=${user.id}`} // Generates unique images based on user ID
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 mb-4">ID: {user.id}</p>
            <p className="text-gray-600 mb-4">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
