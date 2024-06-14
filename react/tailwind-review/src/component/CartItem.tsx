import { CiTrash } from 'react-icons/ci'
import { COLOR, Controller, QUANTITY } from '../_utils/constant'
import { Select } from './Select'

export function CartItem({
  controller,
}: {
  controller: Controller
}): JSX.Element {
  return (
    <div className="cursor-pointer  hover:bg-lime-200  bg-gray-50 hover:bg-opacity-50 p-2 space-y-2">
      <div className={`flex space-x-2 py-2`}>
        <img className="h-24 max-w-24" src={controller.src} />
        <div className="space-y-2">
          <div className="font-bold">{controller.title}</div>
          <div className="text-small text-gray-400">
            {controller.description}
          </div>
        </div>
        <div className="font-bold">{`${controller.price}$`}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div>
            <div>{'QTY'}</div>
            <Select options={QUANTITY} className='w-16 p-1'></Select>
          </div>
          <div>
            <div>{'COLOR'}</div>
            <Select options={COLOR} className='w-16 p-1'></Select>
          </div>
          <button>
            <CiTrash size={25} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}
