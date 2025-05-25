import { Authorization } from "@/features/user-auth/ui/Authorization";

interface AuthProps {}

const AuthPage = ({}: AuthProps) => {
  return (
    <section>
      <div className="flex items-center justify-between h-dvh">
        <Authorization />
      </div>
    </section>
  );
};

export default AuthPage;
