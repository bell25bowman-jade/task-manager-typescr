import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav>
      <h2>Task Manager</h2>

      {isAuthenticated ? (
        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create Task</Link>
          <Link to="/profile">Profile</Link>
          <p>{user?.name}</p>

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login Page</Link>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
