import { FaSearch } from "react-icons/fa"

export const Button = () => {
  return (
    <button className="bg-blue-700 border-2 border-black rounded-2xl h-11 w-24 flex items-center justify-center ml-3" aria-label="button">
      <FaSearch />
    </button>
  )
}