import React from 'react';

import { render, screen } from '@testing-library/react';

import Portfolio from '../src/pages/portfolio';

test('should render without crashing', () => {
  render(<Portfolio />);
});

test('should return Pomodoro Clock link', () => {
  render(<Portfolio />);
  expect(screen.getByTitle('Pomodoro Clock'));
});

test('should return Drum Machine link', () => {
  render(<Portfolio />);
  expect(screen.getByTitle('Drum Machine'));
});
