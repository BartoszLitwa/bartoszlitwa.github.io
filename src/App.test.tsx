import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders navigation and initial skeletons', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getAllByText('Loading...').length).toBeGreaterThan(0);
  });

  it('switches language from EN to PL', async () => {
    const user = userEvent.setup();
    render(<App />);

    const languageToggle = screen.getByRole('button', { name: /select language/i });
    await user.click(languageToggle);

    const polishOption = screen.getByRole('option', { name: /Polski/i });
    await user.click(polishOption);

    expect(await screen.findByRole('menuitem', { name: /Umiejętności/i })).toBeInTheDocument();
  });
});
