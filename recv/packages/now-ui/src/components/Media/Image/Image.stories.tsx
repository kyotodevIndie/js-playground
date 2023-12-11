import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'


const meta: Meta<typeof Image> = {
  title: 'Media/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    alt: 'Image',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {},
}
