import React, { useRef, useState } from "react";
import Lottie from "react-lottie";

import IconHome from "../../../assets/icon-home-white.json";
import Link from "next/link";


export const AnimatedHomeIcon = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: IconHome,
  };

  return (
    <div className="absolute top-3 left-3.5 z-10">
      <Link href="/">
        <Lottie options={defaultOptions} width={35} height={35} />{" "}
      </Link>
    </div>
  );
};
