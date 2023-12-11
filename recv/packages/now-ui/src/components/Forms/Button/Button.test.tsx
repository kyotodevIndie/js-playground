import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

test('Test Button Component', () => {
  // Mock the click handler function
  const handleClick = jest.fn()

  // Render the Button component with the mock click handler and disabled set to false
  render(
    <Button onClick={handleClick} disabled={false}>
      Click Here
    </Button>,
  )

  // Check if the button with text 'Click Here' is present in the document
  const buttonElement = screen.getByText('Click Here')
  expect(buttonElement).toBeInTheDocument()

  // Trigger a click event on the button
  fireEvent.click(buttonElement)

  // Check if the click handler function was called correctly
  expect(handleClick).toHaveBeenCalled()
})
