import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders NavBar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Assuming NavBar contains some identifiable text
    expect(screen.getByText('Your NavBar Text')).toBeInTheDocument();
  });

  test('renders Home component by default', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Assuming Home component contains some identifiable text
    expect(await screen.findByText('Your Home Text')).toBeInTheDocument();
  });

  test('renders User Registration component for /signup route', async () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );

    // Assuming UserReg component contains some identifiable text
    expect(await screen.findByText('Your User Registration Text')).toBeInTheDocument();
  });

  // Add more tests for other routes as needed
});
