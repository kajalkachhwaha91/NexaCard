import React from "react";
import cardImg from "/img/home.jpg"; // your card image
import qrImg from "/img/home.jpg"; // your QR image

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#e8e7e5] text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold">Our Features</h2>

          <p className="text-gray-800 mt-4 max-w-xl mx-auto leading-relaxed">
            Discover exciting new tools and features designed <br />
            to enhance your experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Big Card */}
          <div className="bg-[#9b9df5] rounded-[50px] p-10 flex flex-col justify-between shadow-xl">
            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Create your own Customize <br /> Card
              </h3>

              <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                Customize
              </button>
            </div>

            {/* Image */}
            <div className="mt-10 flex justify-center">
              <img
                src={cardImg}
                alt="Customize Card"
                className="w-[90%] max-w-sm rotate-[-10deg] hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-10">
            {/* Top Black Card */}
            <div className="bg-[#1c1c1c] rounded-[50px] p-10 flex justify-between items-center shadow-xl">
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Tap and share
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-xs">
                  Experience cutting-edge tools that make voice-to-text faster,
                  smarter, and more accurate.
                </p>
              </div>

              {/* Icon */}
              <div className="text-6xl text-white">☁️</div>
            </div>

            {/* Bottom Purple Card */}
            <div className="bg-[#5b3df5] rounded-[50px] p-10 flex justify-between items-center shadow-xl">
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Scan QR
                </h3>

                <p className="text-gray-200 leading-relaxed max-w-xs">
                  No language barrier! <br />
                  Translate your message into your language.
                </p>
              </div>

              {/* QR Image */}
              <div>
                <img
                  src={qrImg}
                  alt="QR Code"
                  className="w-32 h-32 rounded-xl bg-white p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
