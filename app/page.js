import Image from "next/image";
import Hero from "./Landing/Hero";
import Eatmore from "./Landing/Eatmore";
import Reviews from "./Landing/Reviews";
import Pricing from "./Landing/Pricing";
import {Footer} from "./Landing/footer";
export default function Home() {
  return (
    <main className=" p-4">
       <Hero/>
          <Eatmore/>
          <Reviews/>
          <Pricing/>
        </main>
  );
}
