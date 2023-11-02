import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-7 h-[70px] lg:h-[80px]">
        <div className="hidden lg:block">
          <div className="flex relative items-center my-2">
            <div className="absolute left-2 text-2xl text-rose-300">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="search for items"
              className="py-2 px-10 w-full"
            />
          </div>
        </div>
        <Image
          className="lg:w-[200px]"
          src="/logo.png"
          width={150}
          height={40}
          alt="logo"
        />
        <div className="text-rose-500 w-[300px] justify-end flex gap-x-4 lg:gap-x-8 text-3xl">
          <AiOutlineHeart />
          <AiOutlineUser />
          <FiShoppingCart />
        </div>
      </div>
      <div className="flex relative items-center lg:hidden my-2 mx-4">
        <div className="absolute left-2 text-2xl text-rose-300">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="search for items"
          className="py-2 px-10 w-full"
        />
      </div>
    </>
  );
};

export default Header;
