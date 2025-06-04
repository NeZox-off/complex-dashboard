import React, { FC, PropsWithChildren } from "react"; 
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex relative min-h-dvh">
      <Sidebar />
      <article className="flex-1 flex flex-col overflow-y-hidden max-h-screen">
        <Header />
        <section className="min-h-dvh flex flex-col">{children}</section>
      </article>
    </main>
  );
};
