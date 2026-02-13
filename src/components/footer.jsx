import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2d2f33] text-white py-5 mt-10 rounded-tl-[50px] rounded-tr-[50px]">
      {/* Footer Container */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              NEXA<span className="text-gray-400">Card</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-sm leading-relaxed">
              NexaCard is an NFC-powered digital business card platform that
              helps you connect instantly with a single tap.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Shop Now
              </li>
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                FAQ
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-gray-800 hover:bg-gray-700 transition"
              >
                🌐
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-gray-800 hover:bg-gray-700 transition"
              >
                📸
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-gray-800 hover:bg-gray-700 transition"
              >
                💼
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center ">
          <p className="text-white text-sm ">
            Designed & Developed by Kajal Kachhwaha{" "}
            <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
