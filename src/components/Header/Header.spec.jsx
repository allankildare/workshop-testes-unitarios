import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('<Header /> component', () => {
  it('should have logo and navigation', () => {
    render(<Header />)

    expect(screen.getByTestId('headerComponent')).toBeInTheDocument()
    expect(screen.getByTestId('headerComponent')).toBeVisible()
    expect(screen.getByTestId('headerComponent')).toHaveTextContent('Logo')
    expect(screen.getByTestId('headerComponent')).toHaveTextContent('Github do Dev')
    expect(screen.getByTestId('headerComponent')).toHaveTextContent('Website')
  })
})