import React, { useEffect } from "react";

import { Input } from "@/app/components/Input";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";

import { useWeatherAPI } from "@/app/api/catchWeather";
import { ContentInformation } from "@/app/components/ContentInformation";
import { storeWeather } from "@/redux/dataWeather/actions";

export const Home = () => {
  const dispach = useAppDispatch();

  const { city } = useAppSelector(rootReducer => rootReducer.cityReducer);
  const { data } = useWeatherAPI(city);

  useEffect(() => {
    dispach(storeWeather(data))
  });
  
  return (
    <main className="container w-screen h-screen mx-auto flex items-center justify-center flex-col">
      <header className="flex text-center flex-col">
        <h1 className="font-bold text-4xl text-white">Previsão do Tempo</h1>
        <h1 className="font-regular text-xl text-white mt-5 mb-20 underline underline-offset-8">
          Mantenha-se informado sobre o clima da sua região ou em qualquer parte do mundo.
        </h1>
      </header>

      <div>
        <Input />
      </div>
      
      {data &&
        <ContentInformation />
      }
    </main>
  );
};
