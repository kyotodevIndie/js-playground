import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

import { Cube } from '@phosphor-icons/react'
import React from 'react'

const meta: Meta<typeof Button> = {
  title: 'Forms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Buttons',
    size: 'xs',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'primaryLight',
        'secondaryGray',
        'secondary',
        'dashBorder',
        'tertiary',
        'linkColor',
        'linkGray',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: (
      <>
        <Cube width={'18px'} height={'18px'} /> ✨ Button here ✨
      </>
    ),
  },
}
