import Header from "@/components/molecules/header/Header";
import React from "react";

const Auth = ({children}) => {
  return (
    <div className="h-dvh flex flex-col items-center justify-center  bg-zinc-300">
      <Header/>
      <div className="md:h-auto md:w-[420px]">
        {children}
      </div>
    </div>
  );
};

export default Auth;
