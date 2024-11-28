import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-[3.5rem] py-6">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">Poliform</h1>
        </Link>
        <ul className="flex items-center gap-8">
          <li className="pb-2 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] transition-all ease-in duration-200">
            <Link href="/" className="">
              Product
            </Link>
          </li>
          <li className="pb-2 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] transition-all ease-in duration-200">
            <Link href="/" className="">
              Lifestyle
            </Link>
          </li>
          <li className="pb-2 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] transition-all ease-in duration-200">
            <Link href="/" className="">
              News
            </Link>
          </li>
          <li className="pb-2 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] transition-all ease-in duration-200">
            <Link href="/" className="">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
