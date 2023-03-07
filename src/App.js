import React from "react";
import Profile from "./components/profile";
import Login from "./components/login";
import { AuthContext } from "./providers/auth";

function App() {
  const { user } = React.useContext(AuthContext)
  console.log(user)
  return (
    <>
      <h1 style={{color: user.color}}> Olá mundo </h1>
      <Profile />
      <Login />
    </>
  );
}

export default App;
