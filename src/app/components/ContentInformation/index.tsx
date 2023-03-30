import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { addCity } from "@/redux/saveCityName/actions";

import { selectImage } from "../SelectImages";

import { GrFormClose } from "react-icons/gr"
import { FaWater, FaWind, FaMapMarkerAlt } from "react-icons/fa";


interface Props {
  setShowContent: (isBoolean: boolean) => void;
};


export const ContentInformation = ({setShowContent}: Props) => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(rootReducer => rootReducer.weatherReducer);

  const handleCloseCard = () => {
    setShowContent(false);

    dispatch(addCity(""));
  }

  
  return (
    <div className="flex animate-slide items-center justify-around flex-col bg-white absolute w-2/4 h-3/4 rounded-3xl shadow-3xl pb-6 pt-6 max-sm:w-11/12 max-xl:w-4/5">
      <GrFormClose onClick={handleCloseCard} fontSize={45} className="absolute top-5 right-6 cursor-pointer"/>
      <div className="flex flex-row items-center">
        <FaMapMarkerAlt fontSize={20} />
        <p className="text-2xl ml-3 max-md:text-xl">{data?.name}</p>
      </div>
      
      <img className="w-80 h-80 max-lg:w-64 max-lg:h-64" src={selectImage(data)} alt="" />

      <div className="flex flex-row ">
        <p className="font-semibold text-7xl max-lg:text-5xl">{parseInt(data?.main?.temp)}</p>
        <p className="font-semibold text-2xl">°C</p>
      </div>

      <p className="first-letter:uppercase font-medium text-3xl mb-12 max-lg:text-2xl">{data?.weather[0]?.description}</p>

      <div className="flex flex-row items-center justify-center">
        <FaWater fontSize={40} className="ml-14 max-md:ml-5 max-md:text-4xl max-lg:ml-8"/>
        <div className="flex flex-col ml-4">
          <p className="font-medium text-lg max-md:text-base">{data?.main?.humidity}%</p>
          <p className="font-medium text-lg max-md:text-base">Umidade</p>
        </div>

        <FaWind fontSize={40} className="ml-14 max-md:ml-5 max-md:text-4xl max-lg:ml-8"/>
        <div className="flex flex-col ml-4 ">
          <p className="font-medium text-lg max-md:text-base">{data?.wind?.speed} km/h</p>
          <p className="font-medium text-lg max-md:text-base">Velocidade do vento</p>
        </div>
      </div>
    </div>
  );
};
