export function UsersShow({ user, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(user, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>User information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Confirm password: {user.password}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={user.name} name="name" type="text" />
        </div>
        <div>
          Email: <input defaultValue={user.email} name="email" type="text" />
        </div>
        <div>
          Password: <input defaultValue={user.password} name="password" type="text" />
        </div>
        <div>
          Confirm password: <input defaultValue={user.password} name="password" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(user)}>Delete</button>
    </div>
  );
}
