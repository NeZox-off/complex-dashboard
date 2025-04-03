"use client";
import React from "react";
import RegisterForm from "./ui/RegisterForm";
import AuthLayout from "../shared/AuthLayout";

interface RegisterProps {}

const Register = ({}: RegisterProps) => {


  return (
    <AuthLayout type="Register" title="Sign in" description="Access to controls and settings. Log in to continue.">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
