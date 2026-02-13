import React from "react";

const PricingSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Heading */}
        <p className="text-lg text-purple-400 font-semibold tracking-wide">
          Let’s Try NEXAA
        </p>

        <h2 className="text-5xl font-serif font-bold mt-4">
          Connect like an expert
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Pick up your customize card as well as number card - Affordable,
          eco-friendly and perfect for first time users.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Standard Card */}
          <div className="bg-gray-300 text-black rounded-[40px] p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-medium">Standard</h3>
              <p className="text-4xl font-semibold mt-4">$ 10</p>

              {/* Lines */}
              <div className="mt-10 space-y-6">
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
              Shop now
            </button>
          </div>

          {/* Custom Card (Highlighted) */}
          <div className="bg-[#2e2e2e] text-white rounded-[40px] p-10 flex flex-col justify-between shadow-2xl scale-105">
            <div>
              <h3 className="text-2xl font-medium uppercase">custom</h3>
              <p className="text-4xl font-semibold mt-4">$ 20</p>

              {/* Lines */}
              <div className="mt-10 space-y-6">
                <hr className="border-gray-400" />
                <hr className="border-gray-400" />
                <hr className="border-gray-400" />
                <hr className="border-gray-400" />
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 bg-gray-200 text-black py-3 rounded-full hover:bg-gray-300 transition">
              Shop now
            </button>
          </div>

          {/* Premium Card */}
          <div className="bg-gray-300 text-black rounded-[40px] p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-medium">premium</h3>
              <p className="text-4xl font-semibold mt-4">$ 25</p>

              {/* Lines */}
              <div className="mt-10 space-y-6">
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
                <hr className="border-gray-500" />
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
