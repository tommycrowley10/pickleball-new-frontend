import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="bg-black text-slate-200 p-4">
        <Link to="/" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Home
        </Link>
        <Link to="/signup" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Signup
        </Link>
        <Link to="/login" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Login
        </Link>
        <Link to="/logout" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Logout
        </Link>
        <Link to="/users" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Players
        </Link>
        <Link to="/matches" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Matches
        </Link>
        <Link to="/matches/new" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Create match
        </Link>
        <Link to="/clubs" className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black">
          Courts near me
        </Link>
      </nav>
    </header>
  );
}
