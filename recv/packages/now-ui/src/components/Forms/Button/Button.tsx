/* eslint-disable prettier/prettier */
import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  'flex justify-center items-center gap-2 text-base-00 w-fit text-sm font-medium leading-6 cursor-pointer px-3 py-1.5 rounded-md border border-solid',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-300 hover:bg-primary-500 focus:bg-primary-300 active:bg-primary-500 disabled:bg-primary-100',
        primaryLight:
          'bg-primary-25 hover:bg-primary-50 hover:shadow-focusMdPrimary50 focus:bg-primary-25 active:bg-primary-50 disabled:bg-primary-25',
        secondaryGray:
          'bg-base-00 text-slate-600 border-slate-200 hover:bg-primary-25 hover:shadow-sm focus:shadow-focusMdPrimary50 active:bg-slate-500 active:shadow-sm disabled:text-slate-200',
        secondary:
          'bg-base-00 text-primary-500 border-primary-400 hover:bg-primary-25 hover:shadow-sm focus:shadow-focusMdPrimary50 active:bg-slate-25 active:shadow-sm disabled:text-primary-200 border-primary-100',
        dashBorder:
          'bg-base-00 text-slate-600 border-dashed border-slate-300 hover:bg-slate-25 hover:text-slate-700 hover:shadow-sm focus:shadow-focusMdSlate50 active:bg-slate-25 active:text-slate-700 active:shadow-sm disabled:text-slate-200 border-slate-200',
        tertiary:
          'bg-base-00 text-slate-600 hover:bg-primary-25 hover:text-primary-500 hover:shadow-sm focus:text-primary-500 focus:shadow-focusMdSlate50 active:bg-primary-25 active:text-primary-500 active:shadow-sm disabled:text-slate-200',
        linkColor:
          'text-slate-600 hover:text-primary-400 focus:text-primary-600 active:text-primary-400 disabled:text-slate-200',
        linkGray:
          'text-slate-600 hover:text-slate-700 focus:text-primary-900 active:text-slate-700 disabled:text-slate-200',
        primary_destrutive:
          'bg-error-600 text-base-00 hover:bg-error-700 focus:bg-error-600 active:bg-error-700 disabled:bg-error-100',
        primaryLight_destrutive:
          'bg-error-25 text-error-600 hover:bg-error-50 hover:shadow-sm focus:bg-error-25 focus:shadow-focusMdError50 active:bg-error-50 disabled:bg-error-25 disabled:text-error-100',
        secondaryGray_destrutive:
          'bg-base-00 text-error-600 border-error-100 hover:bg-error-25 hover:shadow-sm focus:shadow-focusMdError50 active:bg-error-25 active:shadow-sm disabled:text-error-100 disabled:shadow-sm',
        secondary_destrutive:
          'bg-base-00 text-error-500 border-error-100 hover:bg-error-25 hover:shadow-sm focus:shadow-focusMdError50 active:bg-error-25 active:shadow-sm disabled:text-error-100 border-error-50',
        dashBorder_destrutive:
          'bg-base-00 text-error-600 border-dashed border-error-100 hover:bg-error-25 hover:shadow-sm focus:shadow-focusMdError50 active:bg-error-25 active:shadow-sm disabled:text-error-100 border-error-50',
        tertiary_destrutive:
          'bg-base-00 text-error-600 hover:bg-error-25 hover:shadow-sm active:text-error-25 active:text-primary-500 active:shadow-sm disabled:text-error-100',
        linkColor_destrutive:
          'text-error-600 hover:text-error-700 focus:text-error-900 active:text-error-700 disabled:text-error-100',
        linkGray_destrutive:
          'text-error-600 hover:text-error-700 focus:text-error-900 active:text-error-700 disabled:text-error-100',
      },
      size: {
        xs: 'text-sm leading-6 px-3 py-1.5',
        sm: 'text-sm leading-6 px-4 py-2',
        md: 'text-base leading-7 px-5 py-2.5',
        lg: 'text-lg leading-[1.875rem] px-5 py-3',
        xl: 'text-lg leading-[1.875rem] px-6 py-3.5',
        '2xl': 'text-xl leading-8 px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, ...props },
    ref,
  ) => {
    const ButtonComponent = props.asChild ? Slot : 'button'
    return (
      <ButtonComponent
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
