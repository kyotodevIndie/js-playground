/* eslint-disable prettier/prettier */
import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'

const textVariants = cva(
  'text-slate-600 w-fit',
  {
    variants: {
      variant: {
        display1:
          'text-[11.6rem] leading-[13.12rem] tracking-[3.5px]',
        display2:
          'text-[9rem] leading-[10.62rem] tracking-[3.5px]',
        display3:
          'text-[8.37rem] leading-[8.37rem] tracking-[3.5px]',
        display4:
          'text-8xl leading-[6.87rem] tracking-[2.5px]',
        headline1:
          'text-7xl leading-[5.62rem] tracking-[2.3px]',
        headline2:
          'text-[4rem] leading-[5rem] tracking-[2.3px]',
        headline3:
          'text-5xl leading-[3.75rem] tracking-[1.75px]',
        headline4:
          'text-5xl leading-[3.75rem] tracking-[1.75px]',
        headline5:
          'text-[2rem] leading-[2.75rem] tracking-[0.5px]',
        headline6:
          'text-2xl leading-9 tracking-[0.4px]',
        shortDescription1:
          'text-3xl leading-[2.687rem] tracking-[0.5px]',
        shortDescription2:
          'text-[1.75rem] leading-[2.687rem] tracking-[0.5px]',
        shortDescription3:
          'text-[1.625rem] leading-10 tracking-[0.5px]',
        shortDescription4:
          'text-2xl leading-9 tracking-[0.5px]',
        paragraph1:
          'text-[1.375rem] leading-[2.187rem] tracking-[0.3px]',
        paragraph2:
          'text-xl leading-8 tracking-[0.3px]',
        paragraph3:
          'text-lg leading-[1.87rem] tracking-[0.3px]',
        paragraph4:
          'text-base leading-7 tracking-[0.3px]',
        paragraph5:
          'text-sm leading-6 tracking-[0.2px]',
        paragraph6:
          'text-xs leading-5 tracking-[0.2px]',
      },
    },
    defaultVariants: {
      variant: 'paragraph6',
    },
  },
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { className, variant, ...props },
    ref,
  ) => {
    const TextComponent = props.asChild ? Slot : 'p'
    return (
      <TextComponent
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text, textVariants }
