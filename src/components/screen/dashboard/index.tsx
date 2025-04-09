"use client";
import { useHistoryLinks } from "@/src/store/dashboard/history-links";
import Link from "next/link";
import React, { FC } from "react";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  const { history } = useHistoryLinks();
  console.log(history);

  return (
    <div className="relative h-96 bg-[#191A1C] border-b border-solid border-white/10">
      {history.length > 0 && (
        <ul className="absolute z-30">
          {history.map((item, index) => {
            const link = item?.content?.link;
            if (!link) return null;

            return (
              <li key={`${index}-history-${item.title}`}>
                <Link href={link}>{item.content.title || "Без назви"}</Link>
              </li>
            );
          })}
        </ul>
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
