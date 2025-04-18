import Header from "@/src/components/screen/dashboard/ui/header";
import Sidebar from "@/src/components/screen/dashboard/ui/sidebar";
import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex relative min-h-dvh">
      <Sidebar />
      <article className="flex-1 flex flex-col overflow-y-hidden max-h-screen">
        <Header />
        <section className="flex-1">{children}</section>
      </article>
    </main>
  );
};

export default Layout;
