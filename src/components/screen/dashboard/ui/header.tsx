"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Icon,
} from "@/src/components/ui";
import { transformationCurrentPathname } from "@/src/lib/static-data";
import useMainSidebarStore from "@/src/store/dashboard/main-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { show, setShow } = useMainSidebarStore();
  const pathname = usePathname();
  const currentPathname: string[] = pathname.split("/").slice(1);

  const getLastPathname = currentPathname[currentPathname.length - 1];

  return (
    <header className="py-5 border-b-2 border-solid border-[#333] sticky top-0 z-20 bg-background">
      <div className="w-full px-6">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setShow()}
            className="p-2 bg-transparent hover:bg-[#191A1C]"
          >
            {show ? (
              <Icon name="PanelRightOpen" size={24} />
            ) : (
              <Icon name="PanelRightClose" size={24} />
            )}
          </Button>
          <Breadcrumb>
            <BreadcrumbList>
              {currentPathname.map((item, index) => (
                <React.Fragment key={`${index}-breadcrumbs-${item}`}>
                  <BreadcrumbItem>
                    {item === getLastPathname ? (
                      <BreadcrumbPage className="text-base">
                        {transformationCurrentPathname[item]}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        asChild
                      >
                        <Link className="text-base" href={`/${currentPathname[index]}`}>{transformationCurrentPathname[item]}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {item !== getLastPathname && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};

export default Header;
