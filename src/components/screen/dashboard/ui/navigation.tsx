"use client";
import {
  Icon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui";
import { staticData } from "@/src/lib/static-data";
import { cn } from "@/src/lib/utils";
import { useHistoryLinks } from "@/src/store/dashboard/history-links";
import useMainSidebarStore from "@/src/store/dashboard/main-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const navigationData = staticData.navigation();
  const { show } = useMainSidebarStore();
  const { setHistoryLink } = useHistoryLinks();
  const pathname = usePathname();
  return (
    <nav>
      {navigationData.map((item, index) => (
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
                        link: contentItem.link,
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
                      href={contentItem.link}
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
                          href={contentItem.link}
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
