import React from 'react';

import { render, screen } from '@testing-library/react';

import Portfolio from '../src/pages/portfolio';

test('should render without crashing', () => {
  render(<Portfolio />);
});
