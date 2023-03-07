import React from 'react';
import { AuthContext } from "../providers/auth";

const Profile = ()  => {
  const { user } = React.useContext(AuthContext)

  return (
    <>
      <h1> {user.name} </h1>
    </>
  );
}

export default Profile