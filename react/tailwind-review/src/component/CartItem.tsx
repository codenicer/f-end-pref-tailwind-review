import { CiTrash } from 'react-icons/ci'
import { COLOR, FakeCartItem, QUANTITY } from '../_utils/constant'
import { Select } from './Select'
export function CartItem({
  cartItem,
}: {
  cartItem: FakeCartItem
}): JSX.Element {
  return (
    <div className="cursor-pointer  hover:bg-lime-200  bg-gray-50 hover:bg-opacity-50 p-2 space-y-2">
      <div className={`flex space-x-2 py-2`}>
        <img className="h-24 max-w-24" src={cartItem.controller.src} />
        <div className="space-y-2">
          <div className="font-bold">{cartItem.controller.title}</div>
          <div className="text-small text-gray-400">
            {cartItem.controller.description}
          </div>
        </div>
        <div className="font-bold">{`${cartItem.controller.price}$`}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div>
            <div>{'QTY'}</div>
            <Select defaultValue={cartItem.qty} options={QUANTITY} className="w-16 p-1"></Select>
          </div>
          <div>
            <div>{'COLOR'}</div>
            <Select defaultValue={cartItem.color} options={COLOR} className="w-auto p-1 "></Select>
          </div>
          <button>
            <CiTrash size={25} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}
