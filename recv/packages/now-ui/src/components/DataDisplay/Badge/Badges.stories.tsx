import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'


const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      options: ['primary', 'neutral', 'warning', 'success', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
    type: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: 'Badge',
  },
}
