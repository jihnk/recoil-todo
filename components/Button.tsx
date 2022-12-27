import React, { ReactNode } from 'react';

const Button = ({ children, onClick }: { children: ReactNode; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
  return (
    <button onClick={onClick} className="w-20 p-2 text-white border-none rounded-md text-center font-bold bg-[#9E7676]">
      {children}
    </button>
  );
};

export default Button;
