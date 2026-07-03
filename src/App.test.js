// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FortiMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FortiMesh/i);
    expect(titleElement).toBeInTheDocument();
});
