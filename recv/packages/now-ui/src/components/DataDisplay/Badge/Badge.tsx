/* eslint-disable prettier/prettier */
import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

const badgeVariants = cva(
  'flex justify-center items-center gap-1.5 w-fit cursor-pointer px-1.5 py-0 rounded-md border-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-25 text-primary-400 border-primary-100',
        neutral:
          'bg-slate-50 text-slate-500 border-slate-200',
        warning:
          'bg-warning-25 text-warning-600 border-warning-200',
        success:
          'bg-success-25 text-success-500 border-success-300',
        error:
          'bg-error-25 text-error-500 border-error-100',
        // Filled Strong
        primary_filled_strong:
          'bg-primary-500 text-base-00',
        neutral_filled_strong:
          'bg-slate-500 text-base-00',
        warning_filled_strong:
          'bg-warning-500 text-base-00',
        success_filled_strong:
          'bg-success-500 text-base-00',
        error_filled_strong:
          'bg-error-500 text-base-00',
        // Outlined Strong
        primary_outlined_strong:
          'bg-primary-25 text-primary-500 border-primary-100',
        neutral_outlined_strong:
          'bg-slate-25 text-slate-500 border-slate-200',
        warning_outlined_strong:
          'bg-warning-25 text-warning-600 border-warning-200',
        success_outlined_strong:
          'bg-success-25 text-success-500 border-success-100',
        error_outlined_strong:
          'bg-error-25 text-error-500 border-error-100',
        // Text Strong
        primary_text_strong:
          'text-primary-500',
        neutral_text_strong:
          'text-slate-500',
        warning_text_strong:
          'text-warning-600',
        success_text_strong:
          'text-success-500',
        error_text_strong:
          'text-error-500',
      },
      type: {
        filled: 'border-none',
        outlined: 'bg-[none] border border-solid',
        text: 'bg-[none] border-none',
      },
      size: {
        xs: 'text-xs leading-5 px-2 py-0.5',
        sm: 'text-sm leading-6 px-2 py-1',
        md: 'text-md leading-7 px-3 py-1',
        lg: 'text-lg leading-8 px-3 py-1 rounded-full font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      type: 'filled',
      size: 'xs'
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof badgeVariants> {
  asChild?: boolean
  strong?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, size, type, strong, ...props },
    ref,
  ) => {
    const BadgeComponent = props.asChild ? Slot : 'span'
    const variant: any = strong ? `${props.variant}_${type}_strong` : props.variant
    return (
      <BadgeComponent
        className={cn(badgeVariants({ variant, size, type, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
