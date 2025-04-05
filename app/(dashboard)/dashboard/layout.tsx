import Sidebar from "@/src/components/screen/dashboard/ui/sidebar";
import React from "react";

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {

  return (
    <main className="h-dvh">
      <Sidebar />
    </main>
  );
};

export default Layout;
