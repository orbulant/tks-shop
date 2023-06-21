/* eslint-disable sort-keys-fix/sort-keys-fix */
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import cn from '@/lib/utils/cn'

type ButtonProps = NonNullable<unknown> & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const buttonVariants = cva(
  'inline-flex rounded-lg items-center justify-center overflow-hidden text-ellipsis transition border-2 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-white border-white text-black hover:opacity-70',
        outline: 'bg-transparent border-white text-white hover:opacity-90',
        red: 'border-red-600 bg-red-600 text-white hover:opacity-70',
        red_outline: 'bg-transparent border-red-600 text-red-600 hover:opacity-70',
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, variant, size, font, ...rest } = props

    return <button ref={ref} className={cn(twMerge(buttonVariants({ variant, size, font, className })))} {...rest} />
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
