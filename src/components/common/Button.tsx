import React from 'react';

interface ButtonProps {
  color:
    | 'primary'
    | 'secondary'
    | 'primedText'
    | 'primedFooter'
    | 'primedService'
    | 'footerTextColor'
    | 'neutral'
    | 'success'
    | 'warning'
    | 'error'
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, children }) => {
  return <button className={`btn bg-${color} text-white`}>{children}</button>;
};

export default Button;
