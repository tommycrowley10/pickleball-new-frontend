import axios from "axios";
import { Header } from "./Header";
import { UsersPage } from "./UsersPage";
import { Footer } from "./Footer";
import { MatchesPage } from "./MatchesPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MatchesPage />
      <UsersPage />
      <Footer />
    </div>
  );
}

export default App;
