import { Authorization } from "@/features/user-auth/ui/Authorization";

export default function HomePage() {
  return (
    <section>
      <div className="flex items-center justify-between h-dvh">
        <Authorization />
      </div>
    </section>
  );
}
