import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center bg-accent p-4 md:px-4 md:py-12">
      <div className="max-w-screen-xl w-full p-4 mx-auto space-y-10">
        <h1 className="text-background text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Sign Up and Get Started
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            type="button"
            className="px-6 py-3 rounded-lg font-medium text-white bg-[var(--primary)] hover:bg-opacity-90 shadow-sm transition"
          >
            Get Started For Free
          </button>

          <button
            type="button"
            className="px-6 py-3 rounded-lg font-medium text-[var(--primary)] border border-[var(--primary)] bg-white hover:bg-[var(--primary)] hover:text-white transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
