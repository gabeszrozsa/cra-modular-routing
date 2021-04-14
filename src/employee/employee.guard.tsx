import React from "react";
import { Redirect, useLocation } from "react-router-dom";

const EmployeeGuard = (props: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  const location = useLocation();

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: "/auth/login",
          state: { from: location },
        }}
      />
    );
  }

  return <div>{props.children}</div>;
};

export default EmployeeGuard;
