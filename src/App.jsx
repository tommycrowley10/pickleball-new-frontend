import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { UsersIndexPage } from "./UsersIndexPage";
import { UsersNewPage } from "./UsersNewPage";
import { UsersShowPage } from "./UsersShowPage";
import { MatchesIndexPage } from "./MatchesIndexPage";
import { MatchesNewPage } from "./MatchesNewPage";
import { MatchesShowPage } from "./MatchesShowPage";
import { Footer } from "./Footer";
import { Clubs } from "./Clubs";
import { Home } from "./Home";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container mx-auto flex-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LogoutLink />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/users",
        element: <UsersIndexPage />,
        loader: () => axios.get("/users.json").then((response) => response.data),
      },
      {
        path: "/users/new",
        element: <UsersNewPage />,
      },
      {
        path: "/users/:id",
        element: <UsersShowPage />,
        loader: ({ params }) => axios.get(`/users/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/matches",
        element: <MatchesIndexPage />,
        loader: () => axios.get("/matches.json").then((response) => response.data),
      },
      {
        path: "/matches/new",
        element: <MatchesNewPage />,
      },
      {
        path: "/matches/:id",
        element: <MatchesShowPage />,
        loader: ({ params }) => axios.get(`/matches/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
