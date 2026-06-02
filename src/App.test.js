import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wedding page', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  expect(screen.getByRole('heading', { name: /saloni & shyamal/i })).toBeInTheDocument();
  expect(screen.getByText(/until the day/i)).toBeInTheDocument();
});

test('renders 404 page for unknown routes', () => {
  window.history.pushState({}, '', '/mystery-detour');
  render(<App />);
  expect(screen.getByText(/this route missed the entourage/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go home/i })).toHaveAttribute('href', '/');
});
