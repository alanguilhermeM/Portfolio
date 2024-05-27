// import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex w-full bg-[#121012] justify-center">
        <div className="flex w-[50%] p-5 text-[#FFFFFF] font-exo font-semibold justify-center text-base md:text-lg lg:text-xl xl:text-2xl">
            <h2>Guilherme Mansur |  <span className="text-[#009929]"> Web Developer</span></h2>
        </div>
        <div className="flex w-[50%] p-5 text-[#FFFFFF] font-exo font-semibold justify-center text-base md:text-lg lg:text-xl xl:text-2xl">
            <button className="ml-5 mr-5">Click</button>
            <button className="ml-5 mr-5">Click</button>
            <button className="ml-5 mr-5">Click</button>
        </div>
    </header>
  );
}

export default Header;
