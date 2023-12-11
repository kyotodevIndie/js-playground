import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

import { Box } from '../../Layout/Box'
import React from 'react'
import { HStack, VStack } from '../../Layout/Stack'

const meta: Meta<typeof Box> = {
  title: 'Media/Skeleton',
  component: Box,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: (
      <Box>
        <HStack className="gap-3 flex-nowrap">
          <Skeleton className="w-10 h-10" />
          <VStack>
            <Skeleton className="w-40" />
            <Skeleton className="w-40" />
          </VStack>
        </HStack>
        <Skeleton className="w-52" />
        <Skeleton className="w-52" />
        <Skeleton className="w-52" />
        <Skeleton className="w-52" />
      </Box>
    ),
  },
}
