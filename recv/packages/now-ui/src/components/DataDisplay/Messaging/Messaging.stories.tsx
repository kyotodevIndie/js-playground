import type { Meta, StoryObj } from '@storybook/react'
import { FileMessage, ImageMessage, Message } from './Messaging'

import { HStack, Stack, VStack } from '../../Layout/Stack'
import React from 'react'

const meta: Meta<typeof Stack> = {
  title: 'Data Display/Messaging',
  component: Stack,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const MessageSended: Story = {
  args: {
    children: (
      <VStack className="gap-4">
        <Message variant="sended">Message here</Message>
        <Message variant="received">Message here</Message>
      </VStack>
    ),
  },
}

export const MessageFile: Story = {
  args: {
    children: (
      <VStack className="gap-4">
        <FileMessage
          variant="sended"
          fileName="Static design doc.pdf"
          fileSize="345 kb"
        />
        <FileMessage
          variant="received"
          fileName="Static design doc.pdf"
          fileSize="345 kb"
        />
      </VStack>
    ),
  },
}

export const MessageImage: Story = {
  args: {
    children: (
      <HStack className="items-start gap-3">
        <ImageMessage
          variant="sended"
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="image message"
          className="w-6/12"
        />
        <ImageMessage
          variant="received"
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="image message"
          className="w-6/12"
        />
      </HStack>
    ),
  },
}

// export const InputChatWithButton: Story = {
//   args: {
//     children: <InputChat sendButton />,
//   },
// }

// export const InputChatWithoutButton: Story = {
//   args: {
//     children: <InputChat />,
//   },
// }
