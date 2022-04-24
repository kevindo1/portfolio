import { render } from '@testing-library/react';

import App from './App';

it.skip('should display a page', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
