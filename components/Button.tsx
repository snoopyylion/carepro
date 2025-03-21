import React from 'react';

interface ButtonProps {
  title: string;
  id?: string;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({ title, id, containerClass }) => {
  return (
    <button 
      id={id} 
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
