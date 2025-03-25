import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = "" }) => {
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-600 tracking-wide mb-8 ${className}`}
    >
      {text}
    </h2>
  );
};

export default Title;
