import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);


it(`Renders without crashing, has class name of 'App'`, () => {
  const div = document.createElement('div');
  rtl.render(<App />, div)
  rtl.unmountComponentAtNode(div);
});

it('loads dark mode button', () => {
  const app = rtl.render(<App/>);
  const element = app.getByTitle('dark-mode-btn');
  expect(element).toBeVisible();
})