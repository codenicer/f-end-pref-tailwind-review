import Img1 from '../assets/8bitdo-SN30-Pro-Plus-removebg-preview.png'

export function ControllerDetail(): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1">
        <img className='w-[90vw]' src={Img1}/>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black">8Bitdo SN30 Pro+</div>
        <div className="font-medium md:text-xl">
          {
            'Wireless Bluetooth, rumble vibration, motion controls, USB-C. Button mapping for system-changing accuracy and modifiable vibration Adjustable Hair trigger buttons plus 6 axis motion sensor Modifiable joystick sensitivity.'
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">60.75$</div>
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
