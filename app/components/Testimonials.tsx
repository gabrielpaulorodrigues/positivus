"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";


const testimonials = [
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Emily Johnson",
    role: "CEO at CreativeBoost",
    review:
      "The team at Positivus exceeded our expectations! Their strategies brought real results and we couldn't be happier. 10/10 would recommend!",
  },
  {
    name: "Michael Lee",
    role: "Founder at StartSmart",
    review:
      "Working with Positivus has been a game-changer. Our online visibility has never been better. The support and creativity they bring is unmatched.",
  },
];

export  function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full flex justify-center mb-8">
        <div className="flex flex-wrap items-baseline gap-2 md:gap-4 max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-[#B9FF66] px-4 py-2 rounded-lg">
          Testimonials
          </h2>
          <p className="text-sm md:text-base text-gray-600">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
      </div>

      {/* Testimonial Slider */}
      <section className="bg-dark text-white pt-4 px-4 rounded-[45px] max-w-7xl mx-5">
        <div className="relative flex flex-col items-center text-center gap-6 p-8">
          {/* Speech Bubble */}
          <div className="relative border border-lime-400 p-6 rounded-[45px] max-w-3xl">
            <p className="text-lg leading-relaxed text-start">
              “{testimonials[current].review}”
            </p>
            <div className="absolute -bottom-5 left-[90px] transform -translate-x-1/2 w-10 h-10 border-lime-400 border-l border-b rotate-315 bg-dark"></div>
          </div>

          {/* Name and Role */}
          <div className="mt-4 text-start">
            <p className="text-lime-400 font-semibold">{testimonials[current].name}</p>
            <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
          </div>

          {/* Arrows and Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}>
              <ChevronLeft className="text-white text-2xl hover:text-lime-400 transition" />
            </button>

            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-lime-400" : "bg-white/20"
                  }`}
                ></span>
              ))}
            </div>

            <button onClick={next}>
              <ChevronRight className="text-white text-2xl hover:text-lime-400 transition" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}