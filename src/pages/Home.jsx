import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import TransitionLoader from "@/components/TransitionLoader";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
