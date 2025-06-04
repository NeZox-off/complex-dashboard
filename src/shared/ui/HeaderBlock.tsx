import React from "react";

interface HeaderBlockProps {
    title: string
    description: string
}

const HeaderBlock = ({title, description}: HeaderBlockProps) => {
  return (
    <div className="px-8 pt-6 mb-6">
      <h1 className="text-4xl mb-2">{title}</h1>
      <p className="text-white/40">{description}</p>
    </div>
  );
};

export { HeaderBlock };
