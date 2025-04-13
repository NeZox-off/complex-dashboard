"use client";
import { Button, Icon, Input } from "@/src/components/ui";
import Link from "next/link";
import React from "react";

interface TasksManagerProps {}

const TasksManager = ({}: TasksManagerProps) => {
  return (
    <div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-4xl">Task manager</h1>
          <p className="text-white/40">Choose a board to perform the tasks:</p>
        </div>
        <Input
          placeholder="Search"
          className="max-w-3xs border-white/10 px-3 py-2 rounded placeholder:text-white"
        />
      </div>
      <div className="px-6 py-3 bg-[#191A1C] flex items-center justify-between">
        <ul className="w-full flex items-center gap-3 overflow-hidden">
          <li>
            <Link
              href={"#"}
              className="inline-flex items-center gap-2 px-5 py-2 border border-solid border-white/10 rounded bg-background text-lg font-medium"
            >
              <Icon name="LockOpen" size={20} />
              Site
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="inline-flex items-center gap-2 px-5 py-2 border border-solid border-white/10 rounded bg-background text-lg font-medium"
            >
              <Icon name="LockOpen" size={20} />
              Site
            </Link>
          </li>
        </ul>
        <Button className="px-3 py-2 bg-background rounded text-lg hover:bg-[#191A1C] border-white/10 border-2">
          <Icon name="Plus" size={24} />
          Create a board
        </Button>
      </div>
      <div className="px-8 py-6">
        <ul className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 container mx-auto">
          {new Array(13).fill(null).map(() => (
            <li className="py-3 px-4 bg-[#191A1C] min-w-1/6 rounded">
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <span className="text-xs text-white/40">Title:</span>
                  <h2 className="text-3xl">Site</h2>
                </div>
                <span className="w-full h-0.5 bg-white/10"></span>
                <div className="inline-flex items-center justify-between">
                  Total tasks:
                  <span className="bg-background rounded-full w-5 h-5 text-sm text-center text-white">
                    1
                  </span>
                </div>
                <span className="w-full h-0.5 bg-white/10"></span>
                <ul className="flex flex-col gap-1">
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Quantity of team members:
                    <span className="bg-background rounded-full w-5 h-5 text-sm text-center text-white">
                      1
                    </span>
                  </li>
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Team ID:
                    <span className="text-[#1CA2AB]">IDB2637</span>
                  </li>
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Date of team creation:
                    <span className="text-[#E04E72]">4, January 2025</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full py-2 rounded bg-background hover:bg-[#191A1C] border-2 border-solid border-white/10 text-base">
                Go to <Icon name="ChevronRight" size={24} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksManager;
