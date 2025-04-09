"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function Process() {

  const steps = [
    { number: "01", title: "Consultation", content: "We talk with the client." },
    { number: "02", title: "Planning", content: "We define the roadmap." },
    { number: "03", title: "Execution", content: "We build and deliver." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full mx-7 px-5 lg:px-[100px] mt-8">
      {steps.map((step, index) => (
        <div key={index} className="relative mb-5 w-full">
         
          <div className="absolute -top-[1px] -left-[1px] -right-[1px] -bottom-[6px] bg-black rounded-[45px] z-0" />

          <Accordion
            type="single"
            collapsible
            onValueChange={(value) =>
              setOpenIndex(value === `item-${index}` ? index : null)
            }
            className={`relative z-10 ${
              openIndex === index ? "bg-green-500" : "bg-gray"
            } text-white rounded-[45px] overflow-hidden w-full min-h-24 py-8 transition-colors duration-300`}
          >
            <AccordionItem value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger
                className="
                  flex items-center justify-between
                  px-4 py-3
                  [&>svg]:hidden
                  w-full              
                  whitespace-nowrap
                "
              >
                <span className="text-3xl text-black">{step.number}</span>
                <span className="text-lg text-black">{step.title}</span>
                <span className="inline-flex items-center justify-center w-[30px] h-[30px]">
                  <Image
                    src={openIndex === index ? "/minus.svg" : "/plus.svg"}
                    alt="Toggle icon"
                    width={30}
                    height={30}
                  />
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-2 text-sm text-black overflow-hidden">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </section>
  );
}
