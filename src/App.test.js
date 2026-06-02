import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wedding page', () => {
  render(<App />);
  expect(screen.getByText(/#TwoDetoursLater/i)).toBeInTheDocument();
  expect(screen.getByText(/until the wedding morning/i)).toBeInTheDocument();
});
