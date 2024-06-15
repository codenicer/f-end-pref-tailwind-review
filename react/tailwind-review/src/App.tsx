import { BiMoon, BiSun } from 'react-icons/bi'
import { CONTROLLERS, FAKE_CART_ITEMS } from './_utils/constant'
import { Cart } from './component/Cart'
import { ControllerDetail } from './component/ControllerDetail'
import { ControllerList } from './component/ControllerList'
import { Nav } from './component/Nav'
import { SideBar } from './component/Sidebar'
import { effect, signal } from '@preact/signals-react'
import { getThemeState } from './_utils/getThemeState'

const isDarkMode = signal(getThemeState())

effect(() => {
  if (isDarkMode.value === 'true') {
    window.document.documentElement.classList.add('dark')
  }
  localStorage.setItem('isDarkMode', isDarkMode.value)
})

export function App(): JSX.Element {
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark')
    isDarkMode.value = String(
      window.document.documentElement.classList.contains('dark')
    )
  }

  return (
    <div className="p-10 lg:px-[8vw] xl:px-[10vw] animate-fadeIn dark:bg-night">
      <Nav />
      <ControllerDetail />
      <ControllerList controllers={CONTROLLERS} />
      <SideBar>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </SideBar>
      <div className="fixed bottom-4 right-4 ">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 dark:text-night  dark:bg-white px-4 py-2 rounded-full text-white "
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  )
}
