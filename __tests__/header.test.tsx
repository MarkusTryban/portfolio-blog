import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from '../src/components/header';

test('should render without crashing', () => {
  render(<Header />);
});
