import React from "react";

export default function Why() {
  return (
    <div className="flex items-center justify-center bg-accent p-4 md:px-4 md:py-12">
      <div className="max-w-screen-xl w-full p-4 mx-auto space-y-10">
        <h1 className="text-background text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Why WSO2?
        </h1>
        <div className="flex justify-center items-center gap-4 p-12 bg-background rounded-2xl">
          <div className="md:basis-[60%]">
            <p className="text-base font-normal text-foreground tracking-[0.128px] leading-relaxed mb-4">
              For nearly 20 years, we’ve helped our customers build platforms so
              they can accelerate digital transformation. Our customers deliver
              thousands of APIs and applications on these platforms.
            </p>
            <p className="text-base font-normal text-foreground tracking-[0.128px] leading-relaxed mb-4">
              We know building and maintaining platforms is a never-ending task
              that costs a lot of money and usually doesn’t offer the right
              experience for developers.
            </p>
            <p className="text-base font-normal text-foreground tracking-[0.128px] leading-relaxed mb-4">
              We built Choreo so you don’t have to.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-medium text-white bg-primary hover:bg-opacity-90 transition"
              >
                Get Started For Free
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-lg font-medium text-primary border border-primary hover:bg-primary hover:text-white transition"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:basis-[40%]">
            <img
              src="https://wso2.cachefly.net/wso2/sites/all/2023/choreo/why-wso2-important.webp"
              alt=""
            />
          </div>
        </div>

        <h1 className="text-background text-center text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Here’s What Our Customers Say
        </h1>

        <div className="grid grid-cols-6 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/6oTurM7gESE"
              title="WSO2 Customer Spotlight"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2 row-span-3 col-start-3">
            <Testimonial />
          </div>
          <div className="col-span-2 row-span-2 col-start-5">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/6oTurM7gESE"
              title="WSO2 Customer Spotlight"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2 row-span-3 row-start-3">
            <Testimonial />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/6oTurM7gESE"
              title="WSO2 Customer Spotlight"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2 row-span-3 col-start-5 row-start-3">
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div
      className="flex flex-col justify-between h-full rounded-xl shadow-md px-6 py-8 text-center bg-background text-foreground border border-border"
      // style={{
      //   backgroundColor: "var(--background)",
      //   color: "var(--foreground)",
      //   border: "1px solid var(--border)",
      // }}
    >
      <div
        className="text-3xl mb-4 text-muted-foreground"
        // style={{ color: "var(--muted-foreground)" }}
      >
        ❝
      </div>

      <p
        className="text-base mb-6 leading-relaxed tracking-wide "
        // style={{ letterSpacing: "0.128px" }}
      >
        “Testimonial quote goes here. This is a short paragraph describing the
        user&apos;s experience.”
      </p>

      <div className="mt-auto">
        <p className="font-semibold tracking-wide">Michael Cocca</p>
        <p
          className="text-sm tracking-wide"
          style={
            {
              // color: "var(--muted-foreground)",
              // letterSpacing: "0.128px",
            }
          }
        >
          Integration Architect
        </p>

        <div className="mt-2">
          <img
            src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_university-of-edinburgh.webp"
            alt="Company Logo"
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
