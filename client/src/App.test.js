// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { render, screen } from '@testing-library/react';  // Ensure correct import
import App from './App';  // Import the App component

test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Look for an element that contains the text "learn react", case insensitive
  const linkElement = screen.getByText(/learn react/);

  // Assert that the element is found in the DOM
  expect(linkElement).toBeInTheDocument();
});
