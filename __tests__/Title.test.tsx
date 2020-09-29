import React from 'react';

import { render, screen } from '@testing-library/react';

import Title from '../src/components/Title';

test('should render without crashing', () => {
  render(<Title />);
});
