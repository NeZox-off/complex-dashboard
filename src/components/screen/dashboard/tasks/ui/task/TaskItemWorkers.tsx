import {
  Icon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui";
import { Worker } from "@/src/lib/type";
import Image from "next/image";
import React from "react";

interface TaskItemWorkerProps {
  workers: Worker[] | null;
}

const TaskItemWorker = ({ workers }: TaskItemWorkerProps) => {
  return (
    <>
      {workers && (
        <div className="flex items-center gap-1">
          {workers && (
            <div className="flex items-center">
              {workers.slice(0, 3).map((workerItem, workerIndex) => (
                <Tooltip key={`${workerItem.name}-worker-${workerIndex}`}>
                  <TooltipTrigger className="relative w-8 h-8 rounded overflow-hidden border-2 border-solid border-[#191A1C] -ml-2 first:ml-0 shadow-xs shadow-black">
                    {workerItem.avatar ? (
                      <Image
                        src={workerItem.avatar}
                        alt={`${workerItem.name} image avatar`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm font-semibold bg-background text-white">
                        {workerItem.name.slice(0, 1).toUpperCase()}
                      </div>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>{workerItem.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
          {workers && workers?.length > 3 ? (
            <>
              <Icon name="Plus" />
              <span className="bg-[#191A1C] rounded-full w-5 h-5 text-sm text-center text-white">
                {workers?.length - 3}
              </span>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default TaskItemWorker;
