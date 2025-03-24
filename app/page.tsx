import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Cta from "@/components/Cta";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
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
        <Testimonials/>
        <Faqs/>
        <ContactUs/>
      <Footer/>
    </>
  );
}
