export function UsersIndex({ users }) {
  return (
    <div>
      <h1>All users ({users.length} total)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.first_name}</h2>
          <p>Name: {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </div>
  );
}
