"use client";
import { useHistoryLinks } from "@/src/store/dashboard/history-links";
import Link from "next/link";
import React, { FC } from "react";
import { Icon } from "../../ui";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  const { history } = useHistoryLinks();

  return (
    <div className="relative h-[30rem] bg-[#191A1C] border-b border-solid border-white/10">
      {history?.length > 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 max-w-7xl px-32 w-full">
          <h2 className="mb-3 text-2xl">Your recent visit history</h2>
          <ul className="flex items-center gap-5 flex-wrap justify-between">
            {history.map((item, index) => {
              const link = item?.content?.link;
              if (!link) return null;

              return (
                <li key={`${index}-history-${item.title}`}>
                  <Link href={link} className="p-4 inline-flex flex-col gap-6 bg-background w-80 border-2 border-solid border-white/10 rounded text-[#333] transition-all hover:bg-[#0B0C0D]">
                    <span className="text-white/40 inline-flex flex-col gap-1">
                      <span>In <span className="px-1 bg-[#333] rounded text-">{item.title}</span></span>
                      <span className="text-white inline-flex gap-2">
                        <Icon name={item.content.icon} size={24} />
                        {item.content.title}
                      </span>
                    </span>
                    Last visit 3 days ago
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="lines">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div key={`${_ + index}-key`} className="line"></div>
          ))}
      </div>
    </div>
  );
};
