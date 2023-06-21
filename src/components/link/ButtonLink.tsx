/* eslint-disable sort-keys-fix/sort-keys-fix */
import { AnchorHTMLAttributes } from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'

import cn from '@/lib/utils/cn'

type ButtonLinkProps = NonNullable<unknown> &
  LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonLinkVariants>

const buttonLinkVariants = cva(
  'inline-flex rounded-lg items-center overflow-hidden text-ellipsis transition active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-white border-white text-black border-2 hover:opacity-70',
        outline: 'bg-transparent border-white border-2 hover:opacity-90',
        transparent: 'hover:bg-white hover:bg-opacity-10 hover:opacity-90',
      },
      size: {
        default: 'h-10 min-w-[75px] py-2 px-4',
      },
      font: {
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const ButtonLink = (props: ButtonLinkProps) => {
  const { className, size, font, variant, ...rest } = props

  return <Link className={cn(buttonLinkVariants({ variant, size, font, className }))} {...rest} />
}

ButtonLink.displayName = 'ButtonLink'

export { ButtonLink, buttonLinkVariants }
