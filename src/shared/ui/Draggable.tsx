"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { cn } from "../lib";

type ElementTag = React.ElementType;

interface DraggableProps<T extends ElementTag = "div"> {
  as?: T;
  className?: string;
  custom?: string;
  children?: React.ReactNode;
}

const Draggable = <T extends ElementTag = "div">({
  as,
  className,
  custom,
  children,
  ...rest
}: DraggableProps<T>) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: custom || "default-id",
  });

  const Tag = as || "div";
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Tag
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      {...rest}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
};

export { Draggable };
