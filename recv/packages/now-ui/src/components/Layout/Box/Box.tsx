/* eslint-disable prettier/prettier */
import React from 'react'

import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'


export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const BoxComponent = props.asChild ? Slot : 'div'
    return (
      <BoxComponent
        className={cn('w-fit', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Box.displayName = 'Box'

export { Box }
