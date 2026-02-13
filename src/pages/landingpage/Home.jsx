import React from "react";
import heroImg from "/img/about.jpg"; // replace with your image

const Home = () => {
  return (
    <section className="w-full flex justify-center mt-14 px-6 mb-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            Stay Connected <br />
            in Seconds,
          </h1>

          {/* Subheading */}
          <p className="text-xl mt-4 text-gray-600">
            with the NEXA Business card.
          </p>

          {/* Description */}
          <p className="text-gray-500 mt-8 text-lg leading-relaxed max-w-md">
            Explore Nexa with a single tap! Our NFC digital business card
            instantly connects you to everything you need to know about us.
          </p>

          {/* Button */}
          <button
            className="mt-10 px-8 py-4 rounded-full bg-gray-800 hover:bg-gray-700 
            transition text-white font-medium shadow-lg"
          >
            Customize card
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-[320px] sm:w-[400px] md:w-[450px] h-[320px] sm:h-[400px] 
            rounded-[60px] overflow-hidden shadow-2xl"
          >
            <img
              src={heroImg}
              alt="NFC Cards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
