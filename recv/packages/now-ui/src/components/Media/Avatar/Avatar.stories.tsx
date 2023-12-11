import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

import { shapeVariantsOptions, sizeVariantsOptions } from './consts'

const meta: Meta<typeof Avatar> = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'xs',
    src: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    alt: 'Avatar Image',
  },
  argTypes: {
    size: {
      options: sizeVariantsOptions,
      control: { type: 'select' },
    },
    shape: {
      options: shapeVariantsOptions,
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {},
}
