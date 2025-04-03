"use client"
import Login from "../components/screen/login";
import useAuthStore from "../store/auth";
import Register from "../components/screen/register";

interface AuthProps {}

const AuthPage = ({}: AuthProps) => {
  const type = useAuthStore((state) => state.type);
  return (
    <section className="py-14 h-dvh">
      <div className="container px-16 mx-auto w-full h-full">
        <div className="flex items-center justify-between h-full">
          {type === "Login" ? <Login /> : <Register />}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
