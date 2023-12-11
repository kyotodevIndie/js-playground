import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: '✨ Alert here ✨',
  },
}
