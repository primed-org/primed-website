import React from 'react';

interface ButtonProps {
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error'; // Add more as needed
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, children }) => {
  return (
    <button className={`btn bg-${color} text-white`}>
      {children}
    </button>
  );
};

export default Button;
