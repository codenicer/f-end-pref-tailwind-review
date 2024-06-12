import { CONTROLLERS } from './_utils/constant'
import { CartItem } from './component/CartItem'
import { ControllerDetail } from './component/ControllerDetail'
import { ControllerList } from './component/ControllerList'
import { Nav } from './component/Nav'
import { SideBar } from './component/Sidebar'

export function App(): JSX.Element {
  return (
    <div className="p-10 lg:px-[8vw] xl:px-[10vw]  animate-fadeIn">
      <Nav />
      <ControllerDetail />
      <ControllerList controllers={CONTROLLERS} />
      <SideBar>
        <>
          <h2 className="text-2xl font-bold mb-10">CART</h2>
          {CONTROLLERS.map((c) => (
            <CartItem controller={c} />
          ))}
        </>
      </SideBar>
    </div>
  )
}
