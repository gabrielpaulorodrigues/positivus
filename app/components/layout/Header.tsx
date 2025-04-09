"use client";

import  { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const navMenus = [
    { label: "About us" },
    { label: "Services" },
    { label: "Use Cases" },
    { label: "Pricing" },
    { label: "Blog" },
  ];

  return (
    <>
      <header className="flex flex-row max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:px-4 max-md:py-4 max-md:bg-white pt-6 justify-between items-center z-50">
        <div className="w-[15rem] max-lg:w-[8rem] max-md:w-[10rem] h-auto">
          <img
            src="/LogoHeader.svg"
            alt="Positivus Logo"
            className="w-full object-scale-down cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </div>

        <nav className="hidden md:flex flex-row gap-13  max-xl:gap-4 items-center">
          {navMenus.map((menu, key) => (
            <span
              className="text-xl max-lg:text-sm cursor-pointer leading-[28px] hover:bg-[#B9FF66] hover:rounded-[14px] hover:px-2 transition-all duration-300"
              key={key}
            >
              {menu.label}
            </span>
          ))}
          <button className="text-xl max-lg:text-sm px-[35px] py-[20px] max-lg:px-[17px] max-lg:py-[10px] border rounded-[14px] cursor-pointer hover:border-[#B9FF66] hover:bg-[#B9FF66] transition-all duration-200 ease-in">
            Request a quote
          </button>
        </nav>

        {/* Mobil Menü */}

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose size={30} className="shrink" />
            ) : (
              <RxHamburgerMenu size={30} className="shrink" />
            )}
          </button>
        </div>
        {isOpen && (
          <nav className="fixed top-15 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 z-50">
            {navMenus.map((menu, key) => (
              <span
                key={key}
                className="text-xl cursor-pointer leading-[32px] hover:text-[#B9FF66] transition-all"
              >
                {menu.label}
              </span>
            ))}
            <button className="text-[20px] px-[35px] py-[20px] border rounded-[14px] cursor-pointer hover:border-[#B9FF66] hover:bg-[#B9FF66] transition-all duration-200 ease-in">
              Request a quote
            </button>
          </nav>
        )}
      </header>
    </>
  );
}