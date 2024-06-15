import { CiTrash } from 'react-icons/ci'
import { COLOR, FakeCartItem, QUANTITY } from '../_utils/constant'
import { Select } from './Select'
export function CartItem({
  cartItem,
}: {
  cartItem: FakeCartItem
}): JSX.Element {
  return (
    <div className="cursor-pointer  hover:bg-lime-100  bg-gray-50 hover:bg-opacity-50 p-2 space-y-2 dark:bg-transparent dark:hover:bg-night-50">
      <div className={`flex space-x-2 py-2`}>
        <img className="h-24 max-w-24" src={cartItem.controller.src} />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{cartItem.controller.title}</div>
          <div className="text-small text-gray-400">
            {cartItem.controller.description}
          </div>
        </div>
        <div className="font-bold dark:text-white">{`${cartItem.controller.price}$`}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div>
            <div className='font-bold dark:text-white'>{'QTY'}</div>
            <Select defaultValue={cartItem.qty} options={QUANTITY} className="w-16 p-1"></Select>
          </div>
          <div>
            <div className='font-bold dark:text-white'>{'COLOR'}</div>
            <Select defaultValue={cartItem.color} options={COLOR} className="w-auto p-1 "></Select>
          </div>
          <button className='flex-center pt-[1.5rem]'>
            <CiTrash size={30} className="text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
