"use client";

import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../../public/Life-1.json";

// Dynamically import Lottie with ssr: false
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function AboutValues() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="w-full bg-[#001328] text-white px-6 md:px-16 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2">
        <div className="mb-4 text-teal-300 uppercase tracking-wide font-semibold">
          what I bring
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Built outside a job title.
        </h2>
        <div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
  <h4 className="text-xl font-semibold text-white mb-2">End-to-End Builder</h4>
  <p>
    Frontend, backend, database, deployment — I don&apos;t stop at the part
    I&apos;m comfortable with. Every project here is fully built and shipped by me.
  </p>
</div>
<div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
  <h4 className="text-xl font-semibold text-white mb-2">Fast Learner by Default</h4>
  <p>
    Most of my stack is self-taught, which means I know how to pick up something
    new under pressure. I don&apos;t wait to be taught — I figure it out and ship.
  </p>
</div>
<div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
  <h4 className="text-xl font-semibold text-white mb-2">AI Tools as a Multiplier</h4>
  <p>
    I use Claude and Cursor daily — not as a crutch, but to move faster.
    I still understand every line I ship and own every decision I make.
  </p>
</div>
        <a
          href="/contact"
          className="inline-flex mt-10 items-center text-[#6fffdb] border-b-2 border-[#6fffdb] hover:text-white hover:border-white transition-all"
        >
          Contact Me
          <svg
            className="ml-2 w-4 h-4 transform rotate-90"
            viewBox="0 0 16 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.13 7.98-1.56-1.52-3.46 3.41V-1h-2.18v10.88L3.46 6.46 1.9 7.98l6.11 6.02z"
              fill="#6fffdb"
              transform="matrix(0 1 1 0 1.53 -1.53)"
            />
          </svg>
        </a>
      </div>

      <div className="w-full md:w-1/2 max-w-md mt-10 md:mt-0">
        <div className="bg-[#062243] p-4 rounded-lg shadow-lg">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </section>
  );
}
