"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Image
          src="/images/2553299_13463.jpg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-300">My</span> Finance Manager
            </h1>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Why You Choose This
              </h2>
              <p className="text-lg md:text-xl">
                This Is Best Way To Be Wealthy
              </p>
            </div>

            <p className="text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              You can manage you money correctly from this app. And this will be
              your wealthy life first step. Don't miss it.
            </p>

            <div className="border-t border-white/20 pt-6">
              <Link
                href="/dashboard"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Image section */}
          <div className="lg:w-1/2">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/finance-dashboard.png" // Replace with your dashboard screenshot
                alt="Finance Manager Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating coins decoration */}
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-70 animate-float">
        <Image
          src=""
          alt="Coin"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <div className="absolute top-20 right-10 w-12 h-12 opacity-50 animate-float-delay">
        <Image src="/images/coin-2.png" alt="Coin" width={48} height={48} />
      </div>
    </section>
  );
};

export default HeroSection;
