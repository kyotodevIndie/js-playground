import type { Meta, StoryObj } from '@storybook/react'

import { HStack, VStack, Stack } from '../../Layout/Stack'
import { Input, InputIcon } from './Input'
import React from 'react'
import { Text } from '../../DataDisplay/Text'

const meta: Meta<typeof Stack> = {
  title: 'Forms/Input',
  component: Stack,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: (
      <HStack className="gap-10">
        <VStack className="gap-10">
          <VStack className="items-start">
            <Text variant="paragraph5">Bordered</Text>
            <Input type="text" variant="bordered" />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Filled</Text>
            <Input type="text" variant="filled" />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Bordered Error</Text>
            <Input type="text" variant="bordered_Error" />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Filled Error</Text>
            <Input type="text" variant="filled_Error" />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
        </VStack>
        <VStack className="gap-10">
          <VStack className="items-start">
            <Text variant="paragraph5">Bordered Icon</Text>
            <InputIcon
              type="text"
              variant="bordered"
              leftElement={<>😎</>}
              rightElement={<>✨</>}
              helperElement={<>🎏</>}
            />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Filled Icon</Text>
            <InputIcon
              type="text"
              variant="filled"
              leftElement={
                <Text
                  variant={'paragraph6'}
                  className="text-slate-800 font-semibold"
                >
                  Http://
                </Text>
              }
              rightElement={<>✨</>}
              helperElement={<>🎏</>}
            />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Bordered Error Icon</Text>
            <InputIcon
              type="text"
              variant="bordered_Error"
              leftElement={<>😎</>}
              rightElement={<>✨</>}
              helperElement={<>🎏</>}
            />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
          <VStack className="items-start">
            <Text variant="paragraph5">Filled Error Icon</Text>
            <InputIcon
              type="text"
              variant="filled_Error"
              leftElement={<>😎</>}
              rightElement={<>✨</>}
              helperElement={<>🎏</>}
            />
            <Text variant="paragraph6">Helper Text</Text>
          </VStack>
        </VStack>
      </HStack>
    ),
  },
}
