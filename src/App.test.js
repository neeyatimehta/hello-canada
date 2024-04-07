import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import List from './components/list';
import Item from './components/item';
import '@testing-library/jest-dom';

test('App component renders with a greeting', () => {
  render(<App />);
  const greetingElement = screen.getByText('Hello Canada');
  expect(greetingElement).toBeInTheDocument();
});

test('List component renders provided data', () => {
  const testData = [{ name: 'Ontario', capital: 'Toronto', flagUrl: 'url-to-flag' }];
  render(<List data={testData} />);
  const itemElement = screen.getByText('Ontario');
  expect(itemElement).toBeInTheDocument();
});

test('Clicking on "Provinces" triggers UI update', () => {
  render(<App />);
  
  fireEvent.click(screen.getByText('Provinces'));
});

test('Item component toggles capital visibility', () => {
  render(<Item name="Alberta" capital="Edmonton" flagUrl="url-to-alberta-flag" />);
  fireEvent.click(screen.getByText('Show Capital'));
  expect(screen.getByText('Edmonton')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Hide Capital'));
  expect(screen.queryByText('Edmonton')).not.toBeInTheDocument();
});

test('Clicking on "Territories" triggers UI update', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Territories'));
});
