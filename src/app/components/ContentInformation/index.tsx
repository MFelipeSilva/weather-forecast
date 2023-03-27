import { useWeatherAPI } from "@/app/api/catchWeather";
import { useAppSelector } from "@/hooks/hooks";

import { FaWater, FaWind } from "react-icons/fa";
import nuvem from "../../../assets/icons/nuvemesol.svg";


export const ContentInformation = () => {
  const { city } = useAppSelector(rootReducer => rootReducer.cityReducer);
  const { data } = useWeatherAPI(city);

  return (
    <div className="flex items-center justify-around flex-col bg-white absolute w-2/4 h-3/4 rounded-3xl shadow-3xl pb-6 pt-6">
      <p className="text-2xl">{data?.name}</p>

      <img className="w-80 h-80" src={nuvem.src} alt="" />

      <div className="flex flex-row">
        <p className="font-semibold text-7xl">{parseInt(data?.main.temp)}</p>
        <p className="font-semibold text-2xl">°C</p>
      </div>

      <p className="font-medium text-3xl mb-12">{data?.weather[0].description}</p>

      <div className="flex flex-row items-center justify-center">
        <FaWater fontSize={40} className="ml-24"/>
        <div className="flex flex-col ml-4">
          <p className="font-medium text-lg">{data?.main.humidity}%</p>
          <p className="font-medium text-lg">Umidade</p>
        </div>

        <FaWind fontSize={40} className="ml-24" />
        <div className="flex flex-col ml-4 ">
          <p className="font-medium text-lg">{data?.wind.speed} km/h</p>
          <p className="font-medium text-lg">Velocidade do vento</p>
        </div>
      </div>
    </div>
  );
};
