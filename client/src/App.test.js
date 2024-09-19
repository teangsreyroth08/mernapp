// import { render, screen } from '@testing-library/react';  // Correct import
// import App from './App';  // Import the App component

// test('renders learn react link', () => {
//   // Render the App component
//   render(<App />);

//   // Look for an element that contains the text "learn react", case insensitive
//   const linkElement = screen.getByText(/learn react/i);

//   // Assert that the element is found in the DOM
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ApolloProvider } from '@apollo/client';
// import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

test('renders App component', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});


