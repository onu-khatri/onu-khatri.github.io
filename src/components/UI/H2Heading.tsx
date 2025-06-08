import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H2Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center md:text-left my-10 tracking-tight border-b border-gray-200 dark:border-gray-700 pb-2 ${className}`}
    >
      {children}
    </h2>
  );
};
