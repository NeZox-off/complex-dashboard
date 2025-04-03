import React from "react";
import LoginForm from "./ui/LoginForm";
import AuthLayout from "../shared/AuthLayout";

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <AuthLayout type="Login" title="Login" description="Welcome back!">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
