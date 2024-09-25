import React from 'react';

interface ButtonProps {
  label: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'primedText'
    | 'primedFooter'
    | 'primedService'
    | 'footerTextColor'
    | 'neutral'
    | 'success'
    | 'warning'
    | 'error';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  // Set up variant-based class names for colors
  const baseClass = 'w-[300px] px-4 py-2 rounded-md text-base font-normal ';

  const variantClass = {
    primary: 'bg-primary text-neutral',
    secondary: 'bg-secondary text-neutral',
    primedText: 'bg-primedText text-neutral',
    primedFooter: 'bg-primedFooter text-neutral',
    primedService: 'bg-primedService text-neutral',
    footerTextColor: 'bg-footerTextColor text-neutral',
    neutral: 'bg-neutral text-neutral',
    success: 'bg-success text-neutral',
    warning: 'bg-warning text-neutral',
    error: 'bg-error text-neutral',
  };

  return (
    <button
      className={`${baseClass} ${variantClass[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
