"use client";
import Login from "../components/screen/login";
import useAuthStore from "../store/auth";
import Register from "../components/screen/register";

interface AuthProps {}

const AuthPage = ({}: AuthProps) => {
  const type = useAuthStore((state) => state.type);
  return (
    <section>
      <div className="flex items-center justify-between h-dvh">
        {type === "Login" ? <Login /> : <Register />}
      </div>
    </section>
  );
};

export default AuthPage;
