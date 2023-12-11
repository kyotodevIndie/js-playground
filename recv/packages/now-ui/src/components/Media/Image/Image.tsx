/* eslint-disable prettier/prettier */
import React from 'react'

import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'


export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  asChild?: boolean
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    { className, ...props },
    ref,
  ) => {
    const ImageComponent = props.asChild ? Slot : 'img'
    return (
      <ImageComponent
        className={cn('w-full', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Image.displayName = 'Image'

export { Image }
