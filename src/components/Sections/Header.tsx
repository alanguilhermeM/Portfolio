// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

const Header: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="flex w-full bg-gray-800 justify-center">
      <div className="flex flex-col w-[50%] p-5 text-[#FFFFFF] justify-center text-center">
        <h1 className="font-semibold md:text-2xl sm:text-lg max-[360px]:text-[12px] min-[360px]:text-[16px] xl:text-3xl">
          Guilherme Mansur
        </h1>
        <div className="font-normal md:text-lg max-[360px]:text-[10px] min-[360px]:text-sm xl:text-2xl">
          <Link
            className={`mx-2 text-gray-400 border-b-2 ${
              currentPath === "/" ? "border-solid" : "hover:border-solid"
            } border-green-600`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`mx-2 text-gray-400 border-b-2 ${
              currentPath === "/about" ? "border-solid" : "hover:border-solid"
            } border-blue-500`}
            href="/about"
          >
            Sobre
          </Link>
          <Link
            className={`mx-2 text-gray-400 border-b-2 ${
              currentPath === "/portfolio"
                ? "border-solid"
                : "hover:border-solid"
            } border-red-500`}
            href="/portfolio"
          >
            Portfólio
          </Link>
        </div>
      </div>
      <div className="flex w-[50%] p-5 text-[#FFFFFF] font-semibold justify-center items-center xl:text-xl">
        <Link href='https://github.com/alanguilhermeM' target="_blank">
          <AiFillGithub className="scale-[210%] mx-5 hover:text-teal-400 max-sm:mx-3"/>
        </Link>
        <Link href='' target="_blank">
          <CgProfile className="scale-[210%] mx-5 hover:text-teal-400 max-sm:mx-3" />
        </Link>
        <Link href='https://www.linkedin.com/in/mansur/' target="_blank">
          <BsLinkedin className="scale-[210%] mx-5 hover:text-teal-400 max-sm:mx-3" />
        </Link>

      </div>
    </header>
  );
};

export default Header;
