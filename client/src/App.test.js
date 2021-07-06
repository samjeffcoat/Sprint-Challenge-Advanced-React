import React from 'react';
import { render, getByTestId } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { PlayerCard } from './components/player-card.component';

//afterEach(rtl.cleanup);


test(`Renders without crashing`, () => {
  render(<App />);
});


test('toggle button loads dark mode', () => {
  const { getByTestId }= render(<App/>);
    getByTestId("toggle-element")
});

test('Gets homepage title', () => {
  const { getByText }= render(<App/>);
  getByText(/Women's World Cup/i);
})

// it('loads dark mode button', () => {
//   const app = rtl.render(<App/>);
//   const element = app.getByTitle('dark-mode-btn');
//   expect(element).toBeVisible();
// })