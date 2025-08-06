import React from "react";
// import { FaCloud } from "react-icons/fa";
// import { FaNetworkWired } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function Hero() {
  const positions = [
    // Right side (spaced apart)
    {
      top: 10.0,
      left: 70.0,
      rotate: 12,
      scale: "0.95",
      opacity: "0.15",
    },
    {
      top: 30.0,
      left: 75.0,
      rotate: 22,
      scale: "1.1",
      opacity: "0.18",
    },
    {
      top: 55.0,
      left: 65.0,
      rotate: 33,
      scale: "1.05",
      opacity: "0.17",
    },
    {
      top: 80.0,
      left: 78.0,
      rotate: 28,
      scale: "0.93",
      opacity: "0.13",
    },

    // Left side (spaced apart)
    {
      top: 20.0,
      left: 15.0,
      rotate: 7,
      scale: "0.88",
      opacity: "0.14",
    },
    {
      top: 70.0,
      left: 10.0,
      rotate: 18,
      scale: "1.12",
      opacity: "0.16",
    },
  ];

  return (
    <section className="relative h-screen bg-cover bg-center p-4 md:px-4 md:py-12 flex items-center justify-center bg-accent text-background border border-red-500">
      {positions?.map((pos, i) => {
        return (
          <FaShield
            key={i}
            className="absolute text-background z-0 pointer-events-none hidden md:block"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
              opacity: pos.opacity,
              fontSize: "10rem",
              zIndex: 1,
            }}
          />
        );
      })}
      <div className="md:max-w-screen-xl z-10">
        <div className="md:max-w-[60%]">
          <h3 className="text-base sm:text-lg text-left tracking-[0.128px] font-normal mb-4">
            TRANSFORM TO A CLOUD NATIVE ENTERPRISE
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-10">
            AI-Native Internal Developer Platform as a Service
          </h1>

          <h2 className="text-lg font-normal tracking-[0.128px] leading-relaxed mb-4">
            Automate workflows, reduce complexity, and empower teams to build,
            secure, and deploy at scale with an all-in-one AI-native internal
            developer platform.
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-4 mb-10">
            <button
              // type="button"
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-foreground bg-background hover:bg-opacity-10 shadow-sm transition"
            >
              Get Started For Free
            </button>

            <button
              // type="button"
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-background border border-background bg-transparent cursor-pointer hover:bg-background hover:text-white transition"
            >
              Contact Us
            </button>
          </div>

          <h2 className="text-base sm:text-lg text-left tracking-[0.128px] font-normal mb-4">
            Also available on:
          </h2>

          {/* <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-background border border-background bg-transparent cursor-pointer hover:bg-background hover:text-white transition"
            >
              <IoLogoMicrosoft className="min-h-6 min-w-6"/>
              <span>Microsft Azure</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-background border border-background bg-transparent cursor-pointer hover:bg-background hover:text-white transition"
            >
              <FaAws className="min-h-6 min-w-6"/>
              <span>AWS Marketplace</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-background border border-background bg-transparent cursor-pointer hover:bg-background hover:text-white transition"
            >
              <SiGooglecloud className="min-h-6 min-w-6"/>
              <span>Google Cloud</span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
