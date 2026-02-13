import React from "react";
import aboutImg from "/img/home.jpg"; // replace with your image

const AboutSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-serif font-bold mb-14">About Us</h2>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left Image */}
          <div className="flex-1">
            <div className="rounded-[50px] overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="About NexaCard"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-gray-200 leading-relaxed text-lg">
            {/* Highlight Heading */}
            <h3 className="text-2xl font-semibold mb-6">
              Explore NexaCard with a Single Tap!
            </h3>

            <p className="text-gray-400 mb-6">
              Unlock seamless connectivity with{" "}
              <span className="text-white font-medium">NexaCard</span>, the
              NFC-powered digital business card that brings all your essential
              professional information right to your fingertips.
            </p>

            <p className="text-gray-400 mb-6">
              With just one tap, you can instantly access contact details,
              social media profiles, websites, and more — no apps, no manual
              searching, and no hassle.
            </p>

            <p className="text-gray-400 mb-6">
              NexaCard revolutionizes networking by making interactions
              effortless and instant. Whether you're meeting clients, attending
              business events, or sharing your brand identity, our NFC
              technology ensures a smooth and engaging experience.
            </p>

            <p className="text-gray-400">
              Ditch outdated paper business cards — embrace the future of
              digital networking with{" "}
              <span className="text-white font-semibold">NexaCard</span>.
            </p>

            {/* Button */}
            <button
              className="mt-10 px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 
              transition text-white font-medium shadow-lg"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
