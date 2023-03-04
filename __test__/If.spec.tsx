import React from 'react'
import { render, screen } from '@testing-library/react'
import { If } from '../src'
import '@testing-library/jest-dom'

describe('If component tests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<If condition={true} then="Hi" />)
    expect(baseElement).toBeTruthy()
  })

  it('should render then prop if condition is true', () => {
    render(<If condition={true} then="Hi" />)
    const thenElement = screen.queryByText('Hi')
    expect(thenElement).toBeInTheDocument()
  })

  it('should render otherwise prop if condition is true', () => {
    render(<If condition={false} then="Hi" otherwise="Hello" />)
    const thenElement = screen.queryByText('Hello')
    expect(thenElement).toBeInTheDocument()
  })
})
