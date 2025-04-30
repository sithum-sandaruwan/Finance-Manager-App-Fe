import Link from "next/link";
import React from "react";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-yellow-300">odd</span> Finance Manager
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why You Choose This</h2>
          <p className="text-xl">This Is Best Way To Be Wealthy</p>
        </div>

        <p className="text-lg mb-10 max-w-2xl mx-auto">
          From this application you can manage money correctly. And this will be
          your wealthy life first step. Don't miss it.
        </p>

        <div className="border-t border-white/20 pt-8">
          <Link
            href="/dashboard"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
