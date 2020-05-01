import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component Testing', () => {
  it('Should renders Navbar Component', () => {
    const { getByTestId } = render(<App />);
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  it('Should rendered inside Navbar Component', () => {
    const { getByTestId, getByText } = render(<App />);
    const navbar = getByTestId('navbar');
    const appName = getByText('POKEPOK')
    const myCard = getByText('My Cards')
    expect(navbar).toBeInTheDocument();
    expect(appName).toBeInTheDocument();
    expect(myCard).toBeInTheDocument();
  });

  it('Should link to Home Page from Navbar Link', () => {
    const { getByTestId, getByText } = render(<App />);
    const linkToHome = getByTestId('to-home');
    fireEvent.click(linkToHome)
    const homePageTitle = getByText('Pokemon Cards')
    expect(homePageTitle).toBeInTheDocument();
  });

  it('Should link to My Cards Page from Navbar Link', () => {
    const { getByTestId, getByText } = render(<App />);
    const linkToMyCard = getByTestId('to-myCard')
    fireEvent.click(linkToMyCard)
    const buttonGetMyCard = getByText('Get My Card')
    expect(buttonGetMyCard).toBeInTheDocument();
  });
})
