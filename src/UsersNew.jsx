export function UsersNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email address" type="text" />
        </div>
        <div>
          Password: <input name="password" type="text" />
        </div>
        <div>
          Confirm password: <input name="confirm password" type="text" />
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
