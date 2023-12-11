/* eslint-disable prettier/prettier */
import React from 'react'

import { cn } from '../../../utils/cn'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { className, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn('max-w-sm animate-pulse h-2.5 bg-gray-200 rounded-full w-48 mb-4', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Skeleton.displayName = 'Skeleton'

export { Skeleton }
