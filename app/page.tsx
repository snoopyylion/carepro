import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
        <Hero/>
        <About/>
        <WhyChooseUs/>
        <section className="h-[200px]">

        </section>
        <Gallery/>
        <Cta/>
      <Footer/>
    </>
  );
}
