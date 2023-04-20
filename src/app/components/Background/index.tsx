import { useAppSelector } from "@/hooks/hooks";

import nuvens from "../../../assets/nuvens.svg";
import nuvem from "../../../assets/nuvemesol.svg";
import { AnimatedHomeIcon } from "../AnimationHome";

export const Background = () => {
  const { city } = useAppSelector(rootReducer => rootReducer.cityReducer);

  return (
    <div className={!city? "" : "w-full h-full absolute top-0 left-0 -z-10 blur-sm"}>
      <img
        className="absolute object-cover opacity-40 mt-10 ml-7 w-110 max-sm:w-48 max-md:w-64 max-lg:w-80 max-xl:w-2/6 max-2xl:w-2/6 -z-10"
        src={nuvem.src}
        alt="nuvem"
      />

      <img
        className="absolute object-cover bottom-0 right-0 opacity-40 mb-10 mr-7 w-115 max-sm:w-48 max-md:w-64 max-lg:w-80 max-xl:w-2/5 max-2xl:w-2/6 -z-10"
        src={nuvens.src}
        alt="nuvem"
      />

      <div className="absolute flex items-center justify-center mt-5 mr-5 right-0 top-0">
        <div className="relative opacity-10 rounded-full bg-black w-16 h-16"></div>
        <AnimatedHomeIcon />
      </div>
    </div>
  );
};
