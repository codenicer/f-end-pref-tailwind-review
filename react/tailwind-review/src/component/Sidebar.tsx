import { isCartOpen } from './Nav'


export function SideBar({
  children,
}: {
  children?: JSX.Element
}) {
  return (
    <div
      className={`p-5 last:fixed right-0 top-0 z-50 h-full w-full bg-white md:w-[50%] lg:w-[35%] shadow-lg transition  transform duration-300 ${isCartOpen.value ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button className="absolute right-4 top-4 p-2 font-bold text-black" 
       onClick={()=> {
        isCartOpen.value = false
       }}
      >
        X
      </button>
      {children}
      <div></div>
    </div>
  )
}
