import { render } from '@testing-library/react';
import App from './App';

test('renders without errors', () => {
  const { container } = render(<App />);

  expect(container).toBeDefined();
});
