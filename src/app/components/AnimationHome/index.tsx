import React, { useState } from "react";
import Lottie from "lottie-react";

import Link from "next/link";
import IconHome from "../../../assets/icon-home-white.json";


export const AnimatedHomeIcon = () => {
  const [handleLoop, setHandleLoop] = useState<number>(0);

  return (
      <Link href="/">
        <Lottie animationData={IconHome} onMouseOver={() =>setHandleLoop(0.5)} onMouseOut={() => setHandleLoop(0)} loop={handleLoop} autoPlay={false} className="absolute top-3 left-3.5 z-10 w-9" />
      </Link>
  );
};
