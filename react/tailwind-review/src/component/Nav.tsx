import { signal } from '@preact/signals-react'
import Logo from '../assets/8bit-logo.svg?react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbShoppingBag } from 'react-icons/tb'

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact']
const isMobileMenuShown = signal(false)

export function Nav(): JSX.Element {
  console.log('Render Navbar')
  return (
    <nav className="flex flex-wrap justify-between">
      <a href="#">
        <Logo className="h-7 w-16 " />
      </a>
      <button
        onClick={() => {
          isMobileMenuShown.value = !isMobileMenuShown.value
        }}
        className="lg:hidden focus:ring-2 p-2 focus:ring-gray-200 hover:bg-gray-100 rounded-lg "
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenuShown.value && 'hidden'} lg:block w-full lg:w-auto`}
      >
        <ul className="lg:space-x-8 flex flex-col  bg-gray-50 lg:bg-transparent text-lg rounded-lg border border-gray-100 lg:border-none p-4 lg:flex-row">
          {ROUTES.map((route, index) => (
            <li
              className={`cursor-pointer px-3 py-2 ${index < 1 ? 'bg-blue-500 rounded text-white lg:bg-transparent lg:text-blue-500' : 'hover:bg-gray-100'}`}
              key={index}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-4 left-4 lg:static">
        <div className="rounded-full bg-white shadow-md h-12 w-12 flex-center">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  )
}
