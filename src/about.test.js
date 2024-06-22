// about.test.js
import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/pages/About';

test('renders Explore Our Products link correctly', () => {
  act(()=> 
  render(
    <Router>
      <About />
    </Router>
  ));

  // Check for the Explore Our Products button
  const exploreButton = screen.getByRole('link', { name: /Explore Our Products/i });
  expect(exploreButton).toBeInTheDocument();
  expect(exploreButton).toHaveAttribute('href', '/products');
  expect(exploreButton).toHaveClass('bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105');
});
