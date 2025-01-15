import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/users">Players</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/matchesnew">Create match</Link>
        <Link to="/Clubs">Clubs near me</Link>
      </nav>
    </header>
  );
}
