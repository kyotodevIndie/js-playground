// import React from 'react'
// import {
//   Message as MessageStyled,
//   MessageContainer as MessageContainerStyled,
//   TextBoxContainer as TextBoxContainerStyled,
//   FileMessage as FileMessageStyled,
//   ImageMessage as ImageMessageStyled,
// } from './styles'
// import { type MessagingPropsTypes } from './types'
// import { Input } from '../../Forms/Input'
// import { Button } from '../../Forms/Button'
// import { Image } from '../../Media/Image'
// import { Flex } from '../../Layout/Flex'
// import { Text } from '../Text'
// import SendIcon from '../../../assets/icons/sendIcon.svg'
// import ImageIcon from '../../../assets/icons/imageIcon.svg'
// import LinkIcon from '../../../assets/icons/linkIcon.svg'
// import SmileyIcon from '../../../assets/icons/smileyIcon.svg'
// import dotsIcon from '../../../assets/icons/dotsIcon.svg'

// export const Message: React.FC<MessagingPropsTypes> = ({
//   children,
//   variant = 'primary',
//   ...rest
// }) => {
//   return (
//     <MessageStyled variant={variant} css={{ ...rest }} {...rest}>
//       {children}
//     </MessageStyled>
//   )
// }

// export const FileMessage: React.FC<any> = ({
//   variant = 'sended',
//   fileName,
//   fileSize,
//   ...rest
// }) => {
//   return (
//     <FileMessageStyled variant={variant} css={{ ...rest }} {...rest}>
//       <Image w="40px" src={PDFIcon} alt="pdf Icon" />
//       <Flex align="start">
//         <Text w="fit-content" color="$slate600" fontWeight="600">
//           {fileName}
//         </Text>
//         <Text w="fit-content" color="$slate400">
//           {fileSize}
//         </Text>
//       </Flex>
//     </FileMessageStyled>
//   )
// }

// export const ImageMessage: React.FC<any> = ({
//   variant = 'sended',
//   src,
//   alt,
//   ...rest
// }) => {
//   return (
//     <ImageMessageStyled
//       variant={variant}
//       css={{ ...rest }}
//       {...rest}
//       src={src}
//       alt={alt}
//     />
//   )
// }

// export const MessageContainer: React.FC<any> = ({
//   children,
//   variant = 'primary',
//   ...rest
// }) => {
//   return (
//     <MessageContainerStyled variant={variant} css={{ ...rest }} {...rest}>
//       {children}
//     </MessageContainerStyled>
//   )
// }

// export const InputChat: React.FC<any> = ({ variant, sendButton, ...rest }) => {
//   return (
//     <TextBoxContainerStyled w="100%" css={{ ...rest }} {...rest}>
//       <Input
//         placeholder="Type a message"
//         variant="bordered"
//         w="100%"
//         helperIcon={
//           <>
//             <Image src={ImageIcon} alt="image Icon" />
//             <Image src={LinkIcon} alt="link Icon" />
//             <Image src={SmileyIcon} alt="smiley Icon" />
//             <Image src={dotsIcon} alt="3 dots Icon" />
//           </>
//         }
//       />
//       {sendButton && (
//         <Button variant="primary" p="10px">
//           <Image src={SendIcon} alt="Send Icon" w="20px" />
//         </Button>
//       )}
//     </TextBoxContainerStyled>
//   )
// }

/* eslint-disable prettier/prettier */
import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { Slot } from '@radix-ui/react-slot'
import { Image } from '../../Media/Image'
import { VStack } from '../../Layout/Stack'
import { Text } from '../Text'

const messageVariants = cva(
  'flex justify-center items-center w-fit text-sm not-italic font-medium leading-7 tracking-[-0.0187rem] p-2.5',
  {
    variants: {
      variant: {
        sended:
          'bg-unlisted-1 text-base-00 rounded-[10px_10px_0_10px]',
        received:
          'bg-slate-25 text-slate-800 rounded-[10px_10px_10px_0] border border-solid border-unlisted-2',
      },
    },
    defaultVariants: {
      variant: 'sended',
    },
  },
)

const fileMessageVariants = cva(
  'flex justify-center items-center w-fit p-2.5 bg-slate-25 border border-solid border-unlisted-2 gap-2',
  {
    variants: {
      variant: {
        sended:
          'rounded-[10px_10px_0_10px]',
        received:
          'rounded-[10px_10px_10px_0]',
      },
    },
    defaultVariants: {
      variant: 'sended',
    },
  },
)

const imageMessageVariants = cva(
  'flex justify-center items-center w-fit bg-slate-25 border border-solid border-unlisted-2 gap-2',
  {
    variants: {
      variant: {
        sended:
          'rounded-[10px_10px_0_10px]',
        received:
          'rounded-[10px_10px_10px_0]',
      },
    },
    defaultVariants: {
      variant: 'sended',
    },
  },
)

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof messageVariants> {
  asChild?: boolean
}

export interface FileMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof fileMessageVariants> {
  asChild?: boolean
  fileName: string
  fileSize: string
}

export interface ImageMessageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof fileMessageVariants> {
  asChild?: boolean
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (
    { className, variant, ...props },
    ref,
  ) => {
    const MessageComponent = props.asChild ? Slot : 'div'
    return (
      <MessageComponent
        className={cn(messageVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)


const FileMessage = React.forwardRef<HTMLDivElement, FileMessageProps>(
  (
    { className, variant, fileName, fileSize, ...props },
    ref,
  ) => {
    const FileMessageComponent = props.asChild ? Slot : 'div'
    return (
      <FileMessageComponent className={cn(fileMessageVariants({ variant, className }))} {...props} ref={ref}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17" cy="17" r="17" fill="#F0F3F9" />
          <path d="M25.25 20.75H22.625V25.25M24.875 23.375H22.625M9.5 23.75H11C11.3978 23.75 11.7794 23.592 12.0607 23.3107C12.342 23.0294 12.5 22.6478 12.5 22.25C12.5 21.8522 12.342 21.4706 12.0607 21.1893C11.7794 20.908 11.3978 20.75 11 20.75H9.5V25.25M9.5 17V8.75C9.5 8.55109 9.57902 8.36032 9.71967 8.21967C9.86032 8.07902 10.0511 8 10.25 8H19.25M19.25 8L24.5 13.25M19.25 8V13.25H24.5M24.5 13.25V17M17 25.25C17.5967 25.25 18.169 25.0129 18.591 24.591C19.0129 24.169 19.25 23.5967 19.25 23C19.25 22.4033 19.0129 21.831 18.591 21.409C18.169 20.9871 17.5967 20.75 17 20.75H15.6875V25.25H17Z" stroke="#5E718D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <VStack className='items-start'>
          <Text variant='paragraph5' className='w-fit text-slate-600 font-semibold'>
            {fileName}
          </Text>
          <Text variant='paragraph6' className='w-fit text-slate-400'>
            {fileSize}
          </Text>
        </VStack>
      </FileMessageComponent>
    )
  }
)

const ImageMessage = React.forwardRef<HTMLImageElement, ImageMessageProps>(
  (
    { className, variant, ...props },
    ref,
  ) => {
    const MessageComponent = props.asChild ? Slot : 'img'
    return (
      <MessageComponent
        className={cn(imageMessageVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Message.displayName = 'Message'
FileMessage.displayName = 'FileMessage'
ImageMessage.displayName = 'ImageMessage'

export { Message, FileMessage, ImageMessage, messageVariants }
