/* eslint-disable prettier/prettier */
import React from 'react'

import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'


export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const StackComponent = props.asChild ? Slot : 'div'
    return (
      <StackComponent
        className={cn('w-fit flex justify-center items-center', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const VStackComponent = props.asChild ? Slot : 'div'
    return (
      <VStackComponent
        className={cn('w-fit flex flex-col justify-center items-center', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const HStackComponent = props.asChild ? Slot : 'div'
    return (
      <HStackComponent
        className={cn('w-fit flex flex-row justify-center items-center', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Stack.displayName = 'Stack'
VStack.displayName = 'VStack'
HStack.displayName = 'HStack'

export { Stack, VStack, HStack }

