import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />)
    const h1 = screen.getByRole('heading', {  name: /guilherme mansur \| web developer/i})
    expect(h1).toBeInTheDocument()
  })
})