import { COLOR, QUANTITY } from '../_utils/constant'
import Img1 from '../assets/8bitdo-SN30-Pro-Plus-removebg-preview.png'
import { Select } from './Select'

export function ControllerDetail(): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 mt-4">
      <div className="flex-1 lg:-mt-[11rem]  lg:ml-[5rem]">
        <div className='flex-center lg:h-full bg-gradient-to-br pt-14  from-10% from-[#1F2C51] via-50% via-[#95E8D8] to-[#F0FE88]'>
          <img className="w-screen" src={Img1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-8xl font-black">8Bitdo SN30 Pro+</div>
        <div className="font-medium md:text-xl">
          {
            'Wireless Bluetooth, rumble vibration, motion controls, USB-C. Button mapping for system-changing accuracy and modifiable vibration Adjustable Hair trigger buttons plus 6 axis motion sensor Modifiable joystick sensitivity.'
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">60.75$</div>
        <Select title={"QTY"} options={QUANTITY}></Select>
        <Select title={"COLOR"} options={COLOR}></Select>

        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to cart
          </button>
          <a
            href="$"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  )
}
