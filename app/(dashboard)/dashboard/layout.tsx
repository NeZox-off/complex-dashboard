import { Layout } from "@/widgets/dashboard/Layout";
import React, { PropsWithChildren } from "react";

interface DashboardLayoutProps extends PropsWithChildren {}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default DashboardLayout;
