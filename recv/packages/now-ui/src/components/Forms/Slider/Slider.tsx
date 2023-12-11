/* eslint-disable prettier/prettier */
import React from 'react'

// import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

// const buttonVariants = cva(
//   'flex justify-center items-center gap-2 text-base-00 w-fit text-sm font-medium leading-6 cursor-pointer px-3 py-1.5 rounded-md border border-solid',
//   {
//     variants: {
//       variant: {
//         primary:
//           'bg-primary-300 hover:bg-primary-500 focus:bg-primary-300 active:bg-primary-500 disabled:bg-primary-100',
//         primaryLight:
//           'bg-primary-25 hover:bg-primary-50 hover:shadow-focusMdPrimary50 focus:bg-primary-25 active:bg-primary-50 disabled:bg-primary-25',
//       },
//       size: {
//         xs: 'text-sm leading-6 px-3 py-1.5',
//         sm: 'text-sm leading-6 px-4 py-2',
//         md: 'text-base leading-7 px-5 py-2.5',
//         lg: 'text-lg leading-[1.875rem] px-5 py-3',
//         xl: 'text-lg leading-[1.875rem] px-6 py-3.5',
//         '2xl': 'text-xl leading-8 px-6 py-4',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//       size: 'sm',
//     },
//   },
// )

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean
}
const Slider = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const InputComponent = props.asChild ? Slot : 'input'
    return (
      <InputComponent
        ref={ref}
        type='range'
        className={cn('', ({ className }))}
        {...props}
      />
    )
  },
)

Slider.displayName = 'Slider'

export { Slider }
