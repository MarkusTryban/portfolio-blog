import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from '../src/pages/index';

test('should render without crashing', () => {
  render(<Home />);
});

test('should return Portfolio link', () => {
  render(<Home />);
  expect(screen.getByTitle('Portfolio btn'));
});
