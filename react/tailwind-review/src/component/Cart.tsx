import { FakeCartItem } from '../_utils/constant'
import { CartItem } from './CartItem'

export function Cart({
  cartItems,
}: {
  cartItems: FakeCartItem[]
}): JSX.Element {
 console.log(cartItems)
  return (
    <div>
      <h2 className="dark:text-white text-2xl font-bold mb-10">CART</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CartItem cartItem={cartItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}
