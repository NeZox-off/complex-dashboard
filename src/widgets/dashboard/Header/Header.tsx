"use client";
import { NAVIGATION_LINKS, TRANSFORM_CURRENT_PATH } from "@/shared/config";
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
  const segments = usePathname()!.split("/").filter(Boolean);
  const allTitles = NAVIGATION_LINKS.flatMap(({ content }) =>
    content!.map(({ link }) => link?.split("/").pop()?.toLowerCase())
  );  
  const lastPathname = allTitles[segments.length - 1];

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
              {segments.map((item, index) => (
                <React.Fragment key={`${index}-breadcrumbs-${item}`}>
                  <BreadcrumbItem>
                    {item.toLowerCase() === lastPathname ? (
                      <BreadcrumbPage className="text-base">
                        {TRANSFORM_CURRENT_PATH[item]}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link
                          className="text-base"
                          href={`/${segments[index]}`}
                        >
                          {TRANSFORM_CURRENT_PATH[item]}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {item.toLowerCase() !== lastPathname && (
                    <BreadcrumbSeparator />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};

export { Header };
