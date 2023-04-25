import React, { useState } from "react";
import icon from "../../assets/favicon.svg";
import Link from "next/link";

import { AnimatedSearchIcon } from "../components/AnimationSearch";

export const HelcomePage = () => {
  const [handleLoop, setHandleLoop] = useState<number>(0);

  return (
    <div className="container w-screen h-screen flex mx-auto items-center justify-center flex-col">
      <main className="flex items-center mb-24 justify-center flex-col">
        <h1 className="absolute font-extrabold  text-7xl tracking-wide text-white max-xl:text-6xl max-lg:text-5xl max-md:text-4xl">
          Weather Forecast
        </h1>

        <img
          className="relative top-20 flex w-72 max-lg:w-56 max-lg:top-16 max-md:w-44 max-md:top-12 "
          src={icon.src}
          alt="nuvem-icon"
        />
      </main>

      <div className="flex items-center justify-center">
        <button onMouseOver={() => setHandleLoop(0.5)} className="bg-white flex flex-row items-center justify-center gap-2 font-medium text-base text-cyan-500 h-20 w-48 rounded-md transition-all duration-300 ease-in-out max-lg:w-40 max-md:h-16 max-md:w-32 max-lg:text-sm max-md:text-xs hover:bg-transparent hover:border-2 hover:text-white">
          <Link href="/home">LET&apos;S SEARCH</Link>
          
          <AnimatedSearchIcon handleLoop={handleLoop} setHandleLoop={setHandleLoop} />
        </button>
      </div>
    </div>
  );
};
