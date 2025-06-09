"use client";
import { FC, PropsWithChildren } from "react";
import { DndContext } from "@dnd-kit/core";

interface DndKitProviderProps extends PropsWithChildren {}

export const DndKitProvider: FC<DndKitProviderProps> = ({ children }) => {
  return <DndContext>{children}</DndContext>;
};
