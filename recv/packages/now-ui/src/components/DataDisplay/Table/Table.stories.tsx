import type { Meta, StoryObj } from '@storybook/react'

import { Table, Tbody, Td, Th, Thead, Tr } from './Table'
import React from 'react'
import { Box } from '../../Layout/Box'

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: 'Table',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: (
      <Table>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Age</Th>
            <Th>Race</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Ninha</Td>
            <Td>12</Td>
            <Td>Dog</Td>
          </Tr>
          <Tr>
            <Td>Akita</Td>
            <Td>1</Td>
            <Td>Dog</Td>
          </Tr>
          <Tr>
            <Td>Malagueta</Td>
            <Td>0.2</Td>
            <Td>Dog</Td>
          </Tr>
          <Tr>
            <Td>Maggie</Td>
            <Td>2</Td>
            <Td>Dog</Td>
          </Tr>
          <Tr>
            <Td>Morgana</Td>
            <Td>0.2</Td>
            <Td>Dog</Td>
          </Tr>
        </Tbody>
      </Table>
    ),
  },
}
