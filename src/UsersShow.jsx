export function UsersShow({ user }) {
  return (
    <div>
      <h1>User information</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}
