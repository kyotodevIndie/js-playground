import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'


const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
