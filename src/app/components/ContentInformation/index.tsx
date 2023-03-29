import { useAppSelector } from "@/hooks/hooks";

import nuvem from "../../../assets/icons/nuvemesol.svg";
import { GrFormClose } from "react-icons/gr"
import { FaWater, FaWind, FaMapMarkerAlt } from "react-icons/fa";


export const ContentInformation = () => {
  const { data } = useAppSelector(rootReducer => rootReducer.weatherReducer);
  
  return (
    <div className="flex animate-slide items-center justify-around flex-col bg-white absolute w-2/4 h-3/4 rounded-3xl shadow-3xl pb-6 pt-6">
      <GrFormClose fontSize={45} className="absolute top-5 right-6 cursor-pointer"/>
      <div className="flex flex-row items-center">
        <FaMapMarkerAlt fontSize={20} />
        <p className="text-2xl ml-3">{data?.name}</p>
      </div>
      
      <img className="w-80 h-80" src={nuvem.src} alt="" />

      <div className="flex flex-row ">
        <p className="font-semibold text-7xl">{parseInt(data?.main.temp)}</p>
        <p className="font-semibold text-2xl">°C</p>
      </div>

      <p className="first-letter:uppercase font-medium text-3xl mb-12">{data?.weather[0].description}</p>

      <div className="flex flex-row items-center justify-center">
        <FaWater fontSize={40} className="ml-14"/>
        <div className="flex flex-col ml-4">
          <p className="font-medium text-lg">{data?.main.humidity}%</p>
          <p className="font-medium text-lg">Umidade</p>
        </div>

        <FaWind fontSize={40} className="ml-14" />
        <div className="flex flex-col ml-4 ">
          <p className="font-medium text-lg">{data?.wind.speed} km/h</p>
          <p className="font-medium text-lg">Velocidade do vento</p>
        </div>
      </div>
    </div>
  );
};
