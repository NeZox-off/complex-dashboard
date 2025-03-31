"use client";
import React from "react";
import RegisterForm from "./ui/RegisterForm";
import AuthLayout from "../shared/AuthLayout";

interface RegisterProps {}

const Register = ({}: RegisterProps) => {


  return (
    <AuthLayout type="Register" title="" description="" position="left">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
