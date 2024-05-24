import lite2Bluetooth from '../assets/lite-2-bluetooth.png'
import m30Bluetooth from '../assets/m30-bluetooth.png'
import pro2 from '../assets/pro-2.png'
import sn30 from '../assets/sn30-pro-classic-edition.png'
import ultimateC from '../assets/ultimate-c-wires.png'
import zero2 from '../assets/zero2-bluetooth.png'

export const QUANTITY = ['1', '2', '3', '4', '5']
export const COLOR = ['BLACK', 'WHITE', 'BLACK/WHITE', 'PURPLE']

export interface Controller {
  _id: number
  src: string
  className: string
  title: string
  description: string
  price: number
}

export const CONTROLLERS: Controller[] = [
  {
    _id: 1,
    src: lite2Bluetooth,
    className: 'bg-[#8B362F]',
    title: '8bitdo Lite 2 Bluetooth',
    description:
      'These controllers are designed to be as versatile as possible with multiple devices. Easily pair your controller as S-input or D-input device via Bluetooth®.',
    price: 40.25,
  },
  {
    _id: 2,
    src: m30Bluetooth,
    className: 'bg-[#D07474]',
    title: '8bitdo M30 Bluetooth',
    description:
      'With its short and pebble-shaped grip, the 8BitDo M30 provides better handling. The added turbo functionality mapping enhances control.',
    price: 52.99,
  },
  {
    _id: 3,
    src: pro2,
    className: 'bg-[#252118]',
    title: '8bitdo Pro 2',
    description:
      "Pro 2 features two Pro-level back buttons. These buttons give you more control so you don't have to take your thumbs off the thumbsticks. With 8BitDo Ultimate Software you can assign any button function and macros, too.",
    price: 60.75,
  },
  {
    _id: 4,
    src: sn30,
    className: 'bg-[#767969]',
    title: '8bitdo SN30 Pro',
    description:
      'The SN30 Pro is the worlds first, fully featured retro controller. It boasts a full button set with clickable joysticks, rumble vibration², motion controls, wireless bluetooth®.',
    price: 59.99,
  },
  {
    _id: 5,
    src: ultimateC,
    className: 'bg-[#2F3816]',
    title: '8bitdo Ultimate C Wires',
    description:
      'The 8BitDo Ultimate C Wired Controller was designed with respect for the classics. We paid extra attention to the most critical characteristics like the D-pad, to make sure it feels exactly like you remember it.',
    price: 29.99,
  },
  {
    _id: 6,
    src: zero2,
    className: 'bg-[#0F4F44]',
    title: '8bitdo Zero 2',
    description:
      'Zero 2 weighs just 20 grams, boasts a rechargeable lithium ion battery with 8 hours of play time and is compatible with Switch, PC and Android.',
    price: 39.5,
  },
]
