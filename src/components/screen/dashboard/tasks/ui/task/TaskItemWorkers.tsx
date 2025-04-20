import { Icon } from "@/src/components/ui";
import { Worker } from "@/src/lib/type";
import Image from "next/image";
import React from "react";

interface TaskItemWorkerProps {
  workers: Worker[] | null;
}

const TaskItemWorker = ({ workers }: TaskItemWorkerProps) => {
  return (
    <>
      {workers?.length !== 0 && (
        <div>
          <div>
            {workers?.map((worker_item, worker_index) => (
              <div>
                {worker_item.avatar.length !== 0 ? (
                  <Image
                    src={worker_item.avatar}
                    alt={`${worker_item.name} image avatar`}
                  />
                ) : (
                  worker_item.name.slice(0, 1).toUpperCase()
                )}
              </div>
            ))}
          </div>
          {workers && workers?.length > 3 ? (
            <>
              <Icon name="Plus" />
              <span>{workers?.length - 3}</span>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default TaskItemWorker;
