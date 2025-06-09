"use client";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { usePathname } from "next/navigation";
import { useHistoryLinks } from "@/shared/model";
import { STATIC_ROUTE } from "@/shared/index";

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { addHistory } = useHistoryLinks();
  const pathname = usePathname();
  useEffect(() => {
    if (STATIC_ROUTE[pathname!]) {
      addHistory(STATIC_ROUTE[pathname!]);
    }
  }, [pathname]);
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
