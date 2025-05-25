"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { useSidebarShowStore } from "@/shared/model/store/sidebarShowState";
import { useHistoryLinks } from "@/shared/model";
import { NAVIGATION_LINKS } from "@/shared/config";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const { show } = useSidebarShowStore();
  const { setHistoryLink } = useHistoryLinks();
  const pathname = usePathname();
  return (
    <nav>
      {NAVIGATION_LINKS.map((item, index) => (
        <ul key={`${index}-nav-${item.title}`} className="space-y-2">
          {show ? (
            <li>
              <h3 className="text-lg text-white/40">{item.title}</h3>
            </li>
          ) : null}
          {item.content && (
            <ul className="space-y-2">
              {item.content?.map((contentItem, contentIndex) => (
                <li
                  onClick={() =>
                    setHistoryLink({
                      title: item.title,
                      content: {
                        title: contentItem.title,
                        link: contentItem.link!,
                        icon: contentItem.icon,
                      },
                      last_visit: new Date(),
                    })
                  }
                  key={`${contentIndex}-nav-content-item-${contentItem.title}`}
                  className={cn(
                    "relative mx-auto",
                    pathname === contentItem.link &&
                      "after:absolute after:w-1 after:h-4 after:bg-primary after:top-1/2 after:-translate-y-1/2 after:rounded-xs after:-left-0.5"
                  )}
                >
                  {show ? (
                    <Link
                      href={contentItem.link!}
                      className={cn(
                        "inline-flex items-center gap-2 p-2 rounded text-base font-medium transition-all ease-linear border border-solid border-transparent",
                        pathname === contentItem.link
                          ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/2 pointer-events-none"
                          : "hover:border-white/10 hover:bg-[#191A1C]",
                        show && "w-full"
                      )}
                    >
                      <Icon name={contentItem.icon} size={show ? 24 : 20} />
                      {show && contentItem.title}
                    </Link>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={contentItem.link!}
                          className={cn(
                            "inline-flex items-center gap-2 p-2 rounded text-base font-medium transition-all ease-linear border border-solid border-transparent",
                            pathname === contentItem.link
                              ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 pointer-events-none"
                              : "hover:border-white/10 hover:bg-[#191A1C]",
                            show && "w-full"
                          )}
                        >
                          <Icon name={contentItem.icon} size={show ? 24 : 20} />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {contentItem.title}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </nav>
  );
};

export default Navigation;
