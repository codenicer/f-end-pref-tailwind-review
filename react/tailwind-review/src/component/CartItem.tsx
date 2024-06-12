import { Controller } from '../_utils/constant'

export function CartItem({
  controller,
}: {
  controller: Controller
}): JSX.Element {
  return (
    <div
      className={`flex bg-gray-50 cursor-pointer hover:bg-lime-200 hover:bg-opacity-50 space-x-2 py-2`}
    >
      <img className="h-24 max-w-24" src={controller.src} />
      <div className='space-y-2'>
        <div className="font-bold">{controller.title}</div>
        <div className="text-small text-gray-400">{controller.description}</div>
      </div>
      <div className="font-bold">{`${controller.price}$`}</div>
    </div>
  )
}
