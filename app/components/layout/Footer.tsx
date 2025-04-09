"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const links = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#cases" },
  { name: "Pricing", href: "#Testimonials" },
];

export function Footer() {
  return (
    <>
      <footer className="container mx-auto max-w-[90rem] bg-[#191A23] w-full flex flex-col rounded-t-[45px] mt-36 pt-[55px] pb-[50px] px-[60px] max-lg:px-5">
        <div className="w-full flex flex-row max-lg:flex-col justify-between items-center max-lg:gap-10 ">
          <div className="w-[12rem]">
            <img
              src="/LogoFooter.svg"
              alt="Positivus Footer Logo"
              className="w-full object-contain"
            />
          </div>

          <nav className="text-[#F3F3F3] flex max-lg:flex-col max-lg:gap-5 list-none gap-10">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-lg underline max-lg:no-underline cursor-pointer hover:bg-[#B9FF66] hover:text-[#292A32] hover:font-[500] hover:rounded-[14px] hover:px-2 transition-all duration-300"
              >
                {link.name}
              </li>
            ))}
          </nav>
          <div className="flex flex-row gap-5 max-lg:hidden">
            <div className="bg-[#F3F3F3] rounded-full hover:scale-95 transition-all duration-200">
              <FaLinkedinIn size={35} className="shrink p-1.5 cursor-pointer" />
            </div>
            <div className="bg-[#F3F3F3] rounded-full hover:scale-95 transition-all duration-200">
              <FaFacebookF
                size={35}
                className="shrink pt-1 px-2 cursor-pointer"
              />
            </div>
            <div className="bg-white rounded-full hover:scale-95 transition-all duration-200">
              <FaTwitter size={35} className="shrink p-1.5 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between max-lg:flex-col mt-16 mb-12 items-center">
          <div className="flex flex-col w-2/7 max-lg:w-full max-lg:items-center max-lg:mb-10">
            <h4 className="bg-[#B9FF66] rounded-[7px] px-[7px] w-max">
              Contact us:
            </h4>
            <div className="text-[#F3F3F3] flex flex-col gap-7 mt-7 mb-7">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
            </div>
            <p className="text-[#F3F3F3]">Address: 1234 Main St</p>
            <p className="text-[#F3F3F3]">
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="bg-[#292A32] rounded-[14px] px-10 py-14  max-lg:w-full max-lg:h-auto h-[11.5rem]">
            <div className="flex flex-row max-lg:flex-col justify-center-safe items-center-safe gap-5">
              <input
                type="text"
                placeholder="Email"
                className="px-9 py-[20px] rounded-[14px] border text-[#F3F3F3] placeholder:text-[#F3F3F3] outline-none"
              />
              <button className="bg-[#B9FF66] px-9 py-[20px] rounded-[14px] cursor-pointer border border-[#B9FF66] text-xl hover:bg-[#191A23] hover:border-[#191A23] hover:border hover:text-[#F3F3F3] transition-all duration-200 ease-in">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border border-[#F3F3F3] mb-12" />
        <div className="flex flex-row max-lg:flex-col max-lg:items-center max-lg:gap-5 gap-10">
          <span className="text-[#F3F3F3]">
            © 2023 Positivus. All Rights Reserved.
          </span>
          <span className="text-white underline cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </footer>
    </>
  );
}
