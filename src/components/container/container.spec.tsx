import React from 'react'
import { Container } from '@/components'
import { render, screen } from '@testing-library/react'

const makeSut = () => {
  return render(
    <Container size="500">
      <div>children</div>
    </Container>
  )
}

describe('Container Component', () => {
  test('Should render Container with props', () => {
    makeSut()
    const container = screen.getByTestId('container')
    expect(container.style.maxWidth).toBe('500px')
    expect(container.children.length).toBe(1)
  })
})
