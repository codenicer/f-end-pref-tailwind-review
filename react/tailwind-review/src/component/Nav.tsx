import Logo from '../assets/8bit-logo.svg?react'
import { RxHamburgerMenu } from 'react-icons/rx'

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact']

export function Nav(): JSX.Element {
  return (
    <nav className="flex flex-wrap justify-between">
      <a href="#">
        <Logo className="h-7 w-16 " />
      </a>
      <button className='focus:ring-2 p-2 focus:ring-gray-200 hover:bg-gray-100 rounded-lg '>
        <RxHamburgerMenu size={25} />
      </button>

      <div className='w-full'>
        <ul className='bg-gray-50 text-lg border border-gray-100 p-4'>
         {ROUTES.map((route, index)=> (
          <li className={`cursor-pointer px-3 py-2 ${index < 1 ? 'bg-blue-500 text-white':'hover:bg-gray-100'}`} key={index}>{route}</li>
         ))}
        </ul>
      </div>
    </nav>
  )
}
