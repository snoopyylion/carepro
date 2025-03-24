import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Cta from "@/components/Cta";
import Faqs from "@/components/Faqs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
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
    </>
  );
}
