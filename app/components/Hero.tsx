"use client";

import React from "react";
import Image from "next/image";
import useWindowSize from "@/app/utils/use-window-size";

export function Hero() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="flex flex-row justify-between mt-18 w-full">
        {width >= 768 ? (
          <>
            <div className="flex flex-col w-[531px] max-lg:w-1/2 gap-8">
              <h1>Navigating the digital landscape for success</h1>
              <span className="text-xl leading-[28px] w-[498px] max-lg:w-full ">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </span>
              <button className="w-1/2 bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 ease-in">
                Book a consultation
              </button>
            </div>
            <div className="w-[37rem] max-lg:w-1/2 h-auto relative">
              <Image
                src="/Illustration.svg"
                alt="Hero Banner"
                layout="responsive"
                width={592}
                height={400}
                className="object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-full gap-8">
              <h1>Navigating the digital landscape for success</h1>
              <div className="w-full h-auto relative">
                <Image
                  src="/Illustration.svg"
                  alt="Hero Banner"
                  layout="responsive"
                  width={592}
                  height={400}
                  className="object-cover"
                />
              </div>
              <span className="text-xl leading-[28px] w-full ">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </span>
              <button className="w-full bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 ease-in">
                Book a consultation
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
