import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App /> component', () => {
    it('should exist', () => {
        render(<App />)
        expect(screen.getByTestId('teste')).toBeInTheDocument()
    })
})
