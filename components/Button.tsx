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
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm   bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 shadow-md transition duration-300 ${containerClass}`}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
