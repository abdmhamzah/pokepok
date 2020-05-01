import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'


describe('My Card Page Testing', () => {
  it('Should renders correct My Card Page', () => {
    const { getByText } = render(<App/>)
    const title = getByText(/My Cards/i);
    expect(title).toBeInTheDocument();
  })

  it('Should renders My Cards Component', () => {
    const { getByTestId } = render(<App />);
    const linkToMyCard = getByTestId('to-myCard')
    fireEvent.click(linkToMyCard)
    const mycard = getByTestId('list-mycard');
    expect(mycard).toBeInTheDocument();
  })
})