import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Customization from "@/components/sections/Customization";
import Trust from "@/components/sections/Trust";
import Reviews from "@/components/sections/Reviews";
import Configurator from "@/components/sections/Configurator";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Customization />
        <Trust />
        <Reviews />
        <Configurator />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
