"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionContent = [
    {
      number: "01",
      caption: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      caption: "Research and Strategy Development",
      content:
        "We conduct in-depth market analysis, competitor research, and audience segmentation. This allows us to craft a tailored strategy that aligns with your business objectives and ensures maximum impact.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-row items-start gap-8 max-md:flex-col mt-9 mb-24 max-md:justify-center max-md:items-center">
        <h2 className="bg-green px-2 w-max rounded-lg md:text-4xl">Our Working Process</h2>
        <p className="w-[36rem] max-md:w-full max-md:text-center md:text-base">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="w-full h-auto flex flex-col gap-8">
        {accordionContent.map((content, index) => (
          <div
            key={index}
            className={`w-full flex flex-col ${
              openIndex === index ? "bg-green" : "bg-[#F3F3F3]"
            } border transition-all duration-300 border-[#191A23] border-b-6 py-[41px] px-[60px] max-md:py-[30px] max-md:px-[20px] rounded-[45px]`}
          >
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-6">
                <span className="text-[60px] max-md:text-xl font-[600]">
                  {content.number}
                </span>
                <span className="text-[30px] max-md:text-xl font-[600]">
                  {content.caption}
                </span>
              </div>

              <motion.div
                onClick={() => handleToggle(index)}
                className="rounded-full border bg-[#F3F3F3] cursor-pointer"
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {openIndex === index ? (
                    <motion.div
                      key="minus"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaMinus className="px-4 py-4 shrink text-[60px] max-md:text-[40px] max-md:px-2 max-md:py-2" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaPlus className="px-4 py-4 shrink text-[60px] max-md:text-[40px] max-md:px-2 max-md:py-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="w-full border mt-8 mb-8 border-[#191A23]" />
                  <p>{content.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
