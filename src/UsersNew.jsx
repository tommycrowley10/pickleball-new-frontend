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
          First name: <input name="first name" type="text" />
        </div>
        <div>
          Last name: <input name="last name" type="text" />
        </div>
        <div>
          Email: <input name="email address" type="text" />
        </div>
        <div>
          Username: <input name="username" type="text" />
        </div>
        <div>
          Password: <input name="password" type="text" />
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
