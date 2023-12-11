import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'


const meta: Meta<typeof Text> = {
  title: 'Data Display/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'display1',
        'display2',
        'display3',
        'display4',
        'headline1',
        'headline2',
        'headline3',
        'headline4',
        'headline5',
        'headline6',
        'shortDescription1',
        'shortDescription2',
        'shortDescription3',
        'shortDescription4',
        'paragraph1',
        'paragraph2',
        'paragraph3',
        'paragraph4',
        'paragraph5',
        'paragraph6',
      ],
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: 'Text',
    className: 'text-slate-700',
    variant: 'display1',
  },
}
