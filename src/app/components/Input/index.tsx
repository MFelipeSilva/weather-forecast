import { useState } from "react";

import { FaSearch } from "react-icons/fa"

import { useAppDispatch } from "@/hooks/hooks";
import { addCity } from "@/redux/saveCityName/actions";


export const Input = () => {
  const dispach = useAppDispatch()
  const [name, setName] = useState("")

  return (
    <label className="flex flex-row" htmlFor="">
      <input onChange={(e) => setName(e.target.value)} className="border-2 border-black rounded-2xl pl-4 w-110 h-11 placeholder-grey max-md:w-80 max-lg: max-2xl:w-96" type="text" placeholder="pesquise..."/>
    
      <button onClick={() => dispach(addCity(name))} className="bg-blue-700 border-2 border-black rounded-2xl h-11 w-24 flex items-center justify-center ml-3" aria-label="button">
        <FaSearch />
      </button>
    </label>   
  )
}