import Login from "../components/screen/login";

interface AuthProps {}

const Auth = ({}: AuthProps) => {
  return (
    <section className="py-14 h-dvh">
      <div className="container px-16 mx-auto w-full h-full">
        <div className="flex items-center justify-between h-full">
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Auth;
