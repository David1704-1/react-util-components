import { render, screen } from '@testing-library/react'
import { Foreach } from '../'
import '@testing-library/jest-dom'

const renderComponent = (list: string[]) =>
  render(
    <Foreach
      list={list}
      mapTo={(item, index) => <h1 key={`item-${index}`}>{item}</h1>}
    />
  )

describe('ForEach component tests', () => {
  let list: string[]
  beforeEach(
    () => (list = Array.from({ length: 10 }).map((_, index) => `Item ${index}`))
  )

  it('should render successfully', () => {
    const { baseElement } = renderComponent(list)
    expect(baseElement).toBeTruthy()
  })

  it('should have child for each element', () => {
    renderComponent(list)
    const container = screen.queryByTestId('foreach_Container')
    expect(container?.childNodes).toHaveLength(list.length)
  })
})
