import { useWeatherAPI } from "@/app/api/catchWeather";

import nuvem from "../../../assets/icons/nuvemesol.svg";
import { FaWater, FaWind } from "react-icons/fa";

export const ContentInformation = () => {
  const { data } = useWeatherAPI("Maceió")
  console.log(data)

  return (
    <div className="flex items-center justify-around flex-col bg-white absolute w-2/4 h-3/4 rounded-3xl shadow-3xl pb-6 pt-6">
      <p className="text-2xl">Euclides da Cunha Paulista</p>

      <img className="w-80 h-80" src={nuvem.src} alt="" />

      <div className="flex flex-row">
        <p className="font-semibold text-7xl">0</p>
        <p className="font-semibold text-2xl">°C</p>
      </div>

      <p className="font-medium text-3xl mb-12">Nublado</p>

      <div className="flex flex-row items-center">
        <FaWater fontSize={40} />
        <div className="flex flex-col mr-24 ml-4">
          <p className="font-medium text-lg">40%</p>
          <p className="font-medium text-lg">Umidade</p>
        </div>

        <FaWind fontSize={40} />
        <div className="flex flex-col ml-4">
          <p className="font-medium text-lg">10 km/h</p>
          <p className="font-medium text-lg">Vento</p>
        </div>
      </div>
    </div>
  );
};
