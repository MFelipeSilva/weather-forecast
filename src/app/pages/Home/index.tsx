import React, { useEffect, useState } from "react";

import { Input } from "@/app/components/Input";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";

import { useWeatherAPI } from "@/app/api/catchWeather";
import { storeWeather } from "@/redux/dataWeather/actions";
import { ContentInformation } from "@/app/components/ContentInformation";

export const Home = () => {
  const dispatch = useAppDispatch();
  
  const { city } = useAppSelector(rootReducer => rootReducer.cityReducer);
  const { data } = useWeatherAPI(city);

  const [showContent, setShowContent] = useState<Boolean>()
  
  useEffect(() => {
    dispatch(storeWeather(data))
  });

  useEffect(() => { 
    if(data) {
      setShowContent(true)
    }
  }, [data]);
  
  return (
    <main className="container w-screen h-screen mx-auto flex items-center justify-center flex-col">
      <header className="flex text-center flex-col">
        <h1 className="font-bold text-4xl text-white max-md:text-3xl">Previsão do Tempo</h1>
        <h1 className="font-regular text-xl text-white mt-5 mb-20 underline underline-offset-8 max-md: m-6 max-md:text-lg">
          Mantenha-se informado sobre o clima da sua região ou em qualquer parte do mundo.
        </h1>
      </header>

      <div>
        <Input />
      </div>
      
      {showContent &&
        <ContentInformation setShowContent={setShowContent}/>
      }
    </main>
  );
};
