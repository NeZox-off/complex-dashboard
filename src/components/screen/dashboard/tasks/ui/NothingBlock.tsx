import { Icon } from "@/src/components/ui";
import React from "react";

interface NothingBlockProps {}

const NothingBlock = ({}: NothingBlockProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <Icon name="LayoutTemplate" size={52} />
      <p>Пока здесь нету ничего</p>
    </div>
  );
};

export default NothingBlock;
