import { useState } from "react"

export const Input = () => {
  const [name, setName] = useState("")
  console.log(name)

  return (
    <label htmlFor="">
      <input onChange={(e) => setName(e.target.value)} className="border-2 border-black rounded-2xl pl-4 w-110 h-11 placeholder-grey max-md:w-80 max-lg: max-2xl:w-96" type="text" placeholder="pesquise..."/>
    </label>   
  )
}