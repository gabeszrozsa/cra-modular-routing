import React from "react";
import { useParams } from "react-router-dom";

interface ForgotPasswordPageParams {
  token: string;
}

const ForgotPasswordPage = () => {
  const { token } = useParams<ForgotPasswordPageParams>();

  return (
    <div>
      <h1>ForgotPasswordPage</h1>
      <h2>Token: {token}</h2>
    </div>
  );
};

export default ForgotPasswordPage;
