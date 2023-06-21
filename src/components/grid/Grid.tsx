import Image from 'next/image'
import Link from 'next/link'

import { Size } from '@/types/data/sheety/SheetyData'

export enum Dimensions {
  Square_large = 'col-span-2 row-span-2 bg-red-600',
  Square_small = 'col-span-1 row-span-1 bg-green-500',
  Rect_horizontal = 'col-span-2 row-span-1 bg-pink-500',
  Rect_vertical = 'col-span-1 row-span-2 bg-blue-600',
  Rect_horizontal_large = 'col-span-3 row-span-1 bg-yellow-400',
}

type GridProps = {
  name: string
  desc: string
  link: string
  image: string
  buttonText: string
  size?: Size
}

export default function Grid(props: GridProps) {
  const { name, desc, link, image, buttonText, size = null } = props

  const dimensions: Dimensions =
    size === 'square-large'
      ? Dimensions.Square_large
      : size === 'rect-vertical'
      ? Dimensions.Rect_vertical
      : size === 'rect-horizontal'
      ? Dimensions.Rect_horizontal
      : size === 'rect-horizontal-large'
      ? Dimensions.Rect_horizontal_large
      : Dimensions.Square_small

  return (
    <Link
      className={`${dimensions} group relative h-full w-full text-white transition active:scale-95`}
      href={link ? link : '/'}
      as={link ? link : '/'}
      target="_blank"
      rel="noopener"
      passHref
    >
      {/* <Image
        className={`absolute z-0 object-cover group-hover:brightness-75`}
        src={image}
        alt={`Image of ${name}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      /> */}
      <div className="absolute inset-6 flex flex-col gap-2">
        <span className="text-2xl font-bold uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{name}</span>
        <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{desc}</span>
        <div className="invisible w-fit bg-white px-6 py-3 text-sm font-bold text-black group-hover:visible">
          {buttonText}
        </div>
      </div>
    </Link>
  )
}
