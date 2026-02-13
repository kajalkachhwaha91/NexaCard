import React from "react";
import Navbar from "../../components/navbar";
import Home from "./Home";
import AboutSection from "./About";
import FeaturesSection from "./Feature";
import PricingSection from "./Princing";
import Footer from "../../components/footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className=" mx-auto bg-black rounded-[50px] overflow-hidden">
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
