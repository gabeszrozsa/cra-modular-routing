import React, { useState } from "react";

const AuthLayout = (props: { children: JSX.Element }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleLogin = () => {
    if (user) {
      setUser("");
      localStorage.removeItem("user");
    } else {
      setUser("John");
      localStorage.setItem("user", "John");
    }
  };
  return (
    <div>
      AuthLayout: {user ? "Logged in with user" : "No user"}
      <div>
        <button onClick={() => handleLogin()}>
          {user ? "Logout" : "Login"}
        </button>
      </div>
      <hr />
      {props.children}
    </div>
  );
};

export default AuthLayout;
