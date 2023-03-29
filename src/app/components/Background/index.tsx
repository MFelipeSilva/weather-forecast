import nuvens from "../../../assets/nuvens.svg";
import nuvem from "../../../assets/nuvemesol.svg";

import { useAppSelector } from "@/hooks/hooks";

export const Background = () => {
  const { data } = useAppSelector(rootReducer => rootReducer.weatherReducer);

  return (
    <div className={!data ? "" : "w-full h-full absolute top-0 left-0 -z-10 blur-sm"}>
      <img
        className="absolute object-cover opacity-40 mt-10 ml-7 w-110 max-md:w-56 -z-10"
        src={nuvem.src}
        alt="nuvem"
      />

      <img
        className="absolute object-cover bottom-0 right-0 opacity-40 mb-10 mr-7 w-140 max-md:w-56  -z-10"
        src={nuvens.src}
        alt="nuvem"
      />
    </div>
  );
};
