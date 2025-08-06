import Link from "next/link";
import React from "react";
// import Card from "@/components/general/Card";

export default function Learn() {
  return (
    <div className="flex items-center justify-center p-4 md:px-4 md:py-12">
      <div className="max-w-screen-xl w-full p-4 mx-auto space-y-10">
        <h1 className="text-foreground text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Learn More
        </h1>

        <div className="max-w-[950px] mx-auto grid grid-cols-2 gap-6">
          <Card>
            <p className="text-foreground text-sm leading-relaxed tracking-wide">
              What is Platformless?
            </p>
            <p className="text-foreground text-sm mb-6 leading-relaxed tracking-wide">
              Platformless allows enterprise developers to streamline their
              development process and focus on building apps that deliver value
              to users. This doesn’t mean platforms won’t exist. It just means
              that the complexities of a platform are now hidden from the
              application developers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-medium text-white bg-[var(--primary)] hover:bg-opacity-90 transition"
              >
                Learn More
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-lg font-medium text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
              >
                Read Manifesto
              </button>
            </div>
          </Card>
          <Card>
            <p className="text-foreground text-sm leading-relaxed tracking-wide">
              Reasons Why You Shouldn’t Build Your Own Platform
            </p>
            {/* <p className="text-foreground text-sm leading-relaxed tracking-wide">
              Platformless allows enterprise developers to streamline their
              development process and focus on building apps that deliver value
              to users. This doesn’t mean platforms won’t exist. It just means
              that the complexities of a platform are now hidden from the
              application developers.
            </p> */}
            <ol className="pl-6 text-foreground text-sm leading-relaxed tracking-wide list-decimal">
              <li className="">Slows product launch</li>
              <li className="">
                Requires significant effort to implement best practices
              </li>
              <li className="">
                Involves complex technology and specialized skills
              </li>
              <li className="">Demands a committed team</li>
              <li className="">High costs and risks</li>
            </ol>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-medium text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
              >
                Read Blog
              </button>
            </div>
          </Card>
        </div>

        <h1 className="text-foreground text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Security and Compliance
        </h1>

        <p className="text-foreground text-center max-w-lg mx-auto text-sm mb-6 leading-relaxed tracking-wide">
          At WSO2, we give you peace of mind that our cloud deployments adhere
          to industry standards and best practices for data protection and a
          secure app development experience. See how WSO2 handles{" "}
          <Link href="#" className="underline">
            Security and Compliance.
          </Link>
        </p>
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl text-left px-8 py-8 w-full border shadow-md flex flex-col justify-between gap-4"
      style={{
        backgroundImage: "linear-gradient(to bottom, #1a1f4b, #000000)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </div>
  );
}
