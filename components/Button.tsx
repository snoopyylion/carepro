import React from 'react';

interface ButtonProps {
  title: string;
  id?: string;
  containerClass?: string;
  href?: string; // Optional href for link behavior
}

const Button: React.FC<ButtonProps> = ({ title, id, containerClass, href }) => {
  const classes = `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 shadow-md transition duration-300 ${containerClass}`;

  if (href) {
    return (
      <a
        href={href}
        id={id}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
      </a>
    );
  }

  return (
    <button id={id} className={classes}>
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
