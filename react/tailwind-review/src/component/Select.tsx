import { IoIosArrowDown } from "react-icons/io"

export function Select({
  options,
  title,
}: {
  title: string
  options: string[]
}): JSX.Element {
  return (
    <div className="relative ">
      <select defaultValue={""} className="w-25 appearance-none border border-gray-300 p-4  rounded-sm">
       <option value="" disabled hidden>{title}</option>
        {options.map(option=> <option key={option}>{option}</option>)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
         <IoIosArrowDown></IoIosArrowDown>
        </div>
    </div>
  )
}
