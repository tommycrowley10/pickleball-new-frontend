export function UsersIndex({ users, onShow }) {
  return (
    <div>
      <h1>All players ({users.length} total)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => onShow(user)}>More info</button>
        </div>
      ))}
    </div>
  );
}
