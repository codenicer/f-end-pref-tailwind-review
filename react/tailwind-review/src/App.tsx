import { CONTROLLERS } from './_utils/constant'
import { ControllerDetail } from './component/ControllerDetail'
import { ControllerList } from './component/ControllerList'
import { Nav } from './component/Nav'
import { SideBar } from './component/Sidebar'

export function App(): JSX.Element {
  return (
    <div className="p-10 lg:px-[8vw] xl:px-[10vw]  animate-fadeIn">
      <Nav />
      <ControllerDetail />
      <ControllerList controllers={CONTROLLERS}/>
      <SideBar/>
    </div>
  )
}
