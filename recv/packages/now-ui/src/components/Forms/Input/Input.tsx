/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react'

import './styles.css'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

const inputVariants = cva(
  'flex justify-center items-center flex-row gap-1.5 p-2 outline-none',
  {
    variants: {
      variant: {
        bordered:
          'bordered',
        filled:
          'filled',
        bordered_Error:
          'bordered_Error',
        filled_Error:
          'filled_Error',
      },
    },
    defaultVariants: {
      variant: 'bordered',
    },
  },
)


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  asChild?: boolean
}

export interface InputIconProps extends InputProps {
  leftElement?: ReactElement | ReactElement[]
  rightElement?: ReactElement | ReactElement[]
  helperElement?: ReactElement | ReactElement[]
}

const Division = () => {
  return <div className='w-[1px] h-5 bg-slate-200' />
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, ...props },
    ref,
  ) => {
    const InputComponent = props.asChild ? Slot : 'input'
    return (
      <InputComponent
        ref={ref}
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    )
  },
)

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  (
    { className, variant, leftElement, rightElement, helperElement, ...props },
    ref,
  ) => {
    const InputComponent = props.asChild ? Slot : 'input'
    return (
      <div
        ref={ref}
        className={cn(inputVariants({ variant, className }))}>
        {leftElement && leftElement}
        {leftElement && <Division />}
        <InputComponent
          {...props}
        />
        {helperElement && helperElement}
        {rightElement && <Division />}
        {rightElement && rightElement}
      </div>
    )
  },
)

Input.displayName = 'Input'
InputIcon.displayName = 'InputIcon'

export { Input, InputIcon, inputVariants }
