import { Controller } from '../_utils/constant'

export function Card({ controller }: { controller: Controller }): JSX.Element {
  return (
    <div
      className={`${controller.className} max-w-xl transform transition hover:scale-105`}
    >
      <div className="py-12 px-6">
        <div className="text-2xl font-bold">{controller.title}</div>
        <div className='underline underline-offset-4 font-semibold mt-8'> SHOP NOW +</div>
      </div>
      <img  src={controller.src} className="h-72 absolute top-[-1rem] left-[50%]" />
    </div>
  )
}
