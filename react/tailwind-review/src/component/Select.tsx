import { IoIosArrowDown } from 'react-icons/io'
import { twMerge } from 'tw-merge'

export function Select({
  options,
  title,
  className,
}: {
  title?: string
  options: string[]
  className?: string
}): JSX.Element {
  return (
    <div className="relative ">
      <select
        defaultValue={''}
        className={twMerge(`w-25 appearance-none border border-gray-300 p-4  rounded-sm ${className}`)}
      >
        {title && (
          <option value="" disabled hidden>
            {title}
          </option>
        )}
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown></IoIosArrowDown>
      </div>
    </div>
  )
}
