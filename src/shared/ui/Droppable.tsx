"use client";
import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import { cn } from "../lib";

type ElementTag = React.ElementType;

interface DroppableProps<T extends ElementTag = "div"> {
  as?: T;
  className?: string;
  custom?: string;
  children?: React.ReactNode;
}

const Droppable: FC<DroppableProps> = ({
  as,
  children,
  custom,
  className,
  ...props
}) => {
  const { setNodeRef } = useDroppable({
    id: custom || "default-id",
  });

  const Tag = as || "div";

  return (
    <Tag className={cn(className)} ref={setNodeRef} {...props}>
      {children}
    </Tag>
  );
};

export { Droppable };
