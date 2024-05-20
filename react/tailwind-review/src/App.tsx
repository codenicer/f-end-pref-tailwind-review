import { ControllerDetail } from "./component/ControllerDetail";
import { Nav } from "./component/Nav";

export function App(): JSX.Element {
  return (
    <div className="p-10 lg:px-[8vw] xl:px-[10vw]  animate-fadeIn">
      <Nav />
      <ControllerDetail />
    </div>
  );
}