import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = () => {
    loginWithRedirect({ authorizationParams: { screen_hint: "signup" } });
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
      <button onClick={handleSignup}>Sign up with Auth0</button>
    </div>
  );
};

export default Login;
