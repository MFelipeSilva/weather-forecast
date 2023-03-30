import { useState } from "react";

import { FaSearch } from "react-icons/fa"

import { useAppDispatch } from "@/hooks/hooks";
import { addCity } from "@/redux/saveCityName/actions";


export const Input = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")

  return (
    <label className="flex flex-row" htmlFor="">
      <input onChange={(e) => setName(e.target.value)} className="border-2 border-black rounded-2xl pl-4 w-110 h-11 placeholder-grey max-sm:w-4/5 max-sm:h-10 max-md:w-80 max-lg: max-2xl:w-96" type="text" placeholder="pesquise..."/>
    
      <button onClick={() => dispatch(addCity(name))} className="bg-blue-700 hover:bg-blue-600 transition 0.6s ease-linear border-2 border-black rounded-2xl h-11 w-24 flex items-center justify-center ml-3 max-sm:w-28 max-sm:h-10" aria-label="button">
        <FaSearch />
      </button>
   </label>   
  )
}