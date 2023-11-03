import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between max-w-[1600px] mx-auto items-center px-7 h-[70px] lg:h-[80px]">
        <div className="hidden lg:block">
          <div className="flex relative items-center my-2">
            <div className="absolute left-2 text-2xl text-rose-300">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="search for items"
              className="py-2 px-10 border rounded-md border-slate-500 placeholder:text-slate-500 w-full"
            />
          </div>
        </div>
        <Link href="/">
          <Image
            className="lg:w-[200px]"
            src="/logo.png"
            width={150}
            height={40}
            alt="logo"
          />
        </Link>
        <div className="text-rose-500 w-[300px] justify-end flex gap-x-4 lg:gap-x-8 text-3xl">
          <Link
            href="/favorites"
            className="cursor-pointer hover:lg:text-yellow-100 hover:bg-rose-200 hover:rounded-full lg:p-2"
          >
            <AiOutlineHeart />
          </Link>
          <Link
            href="/account"
            className="cursor-pointer hover:lg:text-yellow-100 hover:bg-rose-200 hover:rounded-full lg:p-2"
          >
            <AiOutlineUser />
          </Link>
          <Link
            href="/cart"
            className="cursor-pointer hover:lg:text-yellow-100 hover:bg-rose-200 hover:rounded-full lg:p-2"
          >
            <FiShoppingCart />
          </Link>
        </div>
      </div>
      <div className="flex relative items-center lg:hidden my-2 mx-4">
        <div className="absolute left-2 text-2xl text-rose-300">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="search for items"
          className="py-2 px-10 border rounded-md border-slate-500 placeholder:text-slate-500 w-full"
        />
      </div>
    </>
  );
};

export default Header;
