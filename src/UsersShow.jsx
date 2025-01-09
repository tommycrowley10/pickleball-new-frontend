export function UsersShow({ user, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(user, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>User information</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <form onSubmit={handleSubmit}>
        <div>
          First name: <input defaultValue={user.first_name} name="first name" type="text" />
        </div>
        <div>
          Last name: <input defaultValue={user.last_name} name="last night" type="text" />
        </div>
        <div>
          Email: <input defaultValue={user.email} name="email" type="text" />
        </div>
        <div>
          Username: <input defaultValue={user.username} name="username" type="text" />
        </div>
        <div>
          Password: <input defaultValue={user.password} name="password" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
