import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from '../src/components/header';

test('should render without crashing', () => {
  render(<Header />);
});

test('should return home link', () => {
  render(<Header />);
  expect(screen.getByText(/Home/i));
});

test('should return portfolio link', () => {
  render(<Header />);
  expect(screen.getByText(/Portfolio/i));
});

test('should return github link', () => {
  render(<Header />);
  expect(screen.getByText(/Github/i));
});

test('should return linkedin link', () => {
  render(<Header />);
  expect(screen.getByText(/Linkedin/i));
});
