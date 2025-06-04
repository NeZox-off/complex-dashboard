"use client";
import { TRANSFORM_CURRENT_PATH } from "@/shared/config";
import { useSidebarShowStore } from "@/shared/model";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Icon,
} from "@/shared/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { show, setShow } = useSidebarShowStore();
  const pathname = usePathname();
  const filteredPathname = pathname?.split("/").filter(Boolean);
  let currentLink = "";
  const crumbs = filteredPathname!.map((item, index) => {
    currentLink += `/${item}`;
    return (
      <React.Fragment key={`${index}-breadcrumbs-${item}`}>
        <BreadcrumbItem>
          {Boolean(index === filteredPathname!.length - 1) ? (
            <BreadcrumbPage className="text-base">
              {TRANSFORM_CURRENT_PATH[item]}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link className="text-base" href={`${currentLink}`}>
                {TRANSFORM_CURRENT_PATH[item]}
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {Boolean(index !== filteredPathname!.length - 1) && (
          <BreadcrumbSeparator />
        )}
      </React.Fragment>
    );
  });

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
            <BreadcrumbList>{crumbs}</BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};

export { Header };
