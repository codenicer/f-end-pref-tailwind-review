import { Controller } from '../_utils/constant'
import { Card } from './Card'

export function ControllerList({
  controllers,
}: {
  controllers: Controller[]
}): JSX.Element {
  return (
    <div className="mt-20">
      <div className="flex-center ">
        <div
          className={`bg-[url("./assets/9282938.png")] bg-cover px-14 py-6 bg-center text-4xl font-extrabold`}
        >
          OTHERS
        </div>
      </div>
      <div className=' mt-10 grid grid-cols-1 gap-y-24 justify-between md:grid-cols-2 md:gap-x-4 xl:grid-cols-3 xl:gap-x-10'>
        {controllers.map((c) => (
          <Card controller={c} />
        ))}
      </div>
    </div>
  )
}
