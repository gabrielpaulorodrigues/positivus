import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Sponsor } from "./components/Sponsor";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Sponsor />
      
      <Services />

      <div className="flex flex-col items-center justify-center mt-8 w-full">
        <h1 className="text-4xl font-bold text-center  bg-green inline-block rounded-md px-2">Our Workin</h1>
        <span className="text-4xl font-bold text-center  bg-green inline-block rounded-md px-2">Process</span>
        <p className="text-base">Step-by-Step Guide to Achieving Your Business Goals</p>
        <Process />
      </div>

      <Testimonials />

    </div>
  );
}
