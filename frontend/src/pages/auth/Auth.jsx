import React from "react";

const Auth = ({children}) => {
  return (
    <div className="h-dvh flex items-center justify-center bg-zinc-800">
      <div className="md:h-auto md:w-[420px]">
        {children}
      </div>
    </div>
  );
};

export default Auth;
