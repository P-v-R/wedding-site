import { render, screen } from '@testing-library/react';
import App from './App';
import Homepage from './Layout/Homepage';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('main layout renders without crashing', () => {
  render (<Homepage/>); 
  console.log("screen console log ====>", screen) 
})