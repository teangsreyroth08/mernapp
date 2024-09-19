import { render, screen } from '@testing-library/react';  // Correct import
import App from './App';  // Import the App component

test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Look for an element that contains the text "learn react", case insensitive
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is found in the DOM
  expect(linkElement).toBeInTheDocument();
});

