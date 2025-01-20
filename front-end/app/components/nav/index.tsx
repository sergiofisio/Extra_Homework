"use client";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <header className="bg-white bg-opacity-55 text-white flex flex-col justify-center items-center h-fit min-h-40">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={150}
        height={150}
        className="mx-auto"
      />
    </header>
  );
};

export default Nav;
