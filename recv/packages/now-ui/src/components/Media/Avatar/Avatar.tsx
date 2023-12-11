/* eslint-disable prettier/prettier */
import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

const avatarVariants = cva(
  'w-full object-cover object-[100%_0];',
  {
    variants: {
      size: {
        xs:
          'w-[24px] h-[24px]',
        sm:
          'w-[32px] h-[32px]',
        md:
          'w-[40px] h-[40px]',
        lg:
          'w-[56px] h-[56px]',
        xl:
          'w-[64px] h-[64px]',
        '2xl':
          'w-[96px] h-[96px]'
      },
      shape: {
        rounded:
          'rounded-lg',
        square:
          'rounded-none',
        circle:
          'rounded-full',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
)

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof avatarVariants> {
  asChild?: boolean
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (
    { className, size, shape, ...props },
    ref,
  ) => {
    const AvatarComponent = props.asChild ? Slot : 'img'
    return (
      <AvatarComponent
        className={cn(avatarVariants({ size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Avatar.displayName = 'Avatar'

export { Avatar, avatarVariants }
