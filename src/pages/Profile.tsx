import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <h2>Please log in</h2>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <img src={user?.picture} alt={user?.name} width="100" />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
