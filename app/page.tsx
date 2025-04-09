import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Sponsor } from "./components/Sponsor";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Sponsor />
      
      <Services />

      
        <Process />
     

      <Testimonials />

    </div>
  );
}
