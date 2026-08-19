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

    expect(await screen.findByRole('link', { name: /Umiejętności/i })).toBeInTheDocument();
  });

  it('provides stable targets for links to lazy sections', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (const sectionId of ['experience', 'skills', 'projects', 'certifications']) {
      expect(document.getElementById(sectionId)).toHaveAttribute('data-lazy-section', sectionId);
    }

    await user.click(screen.getByRole('link', { name: 'Experience' }));
    expect(window.location.hash).toBe('#experience');
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it('preserves unrelated body classes while applying a validated theme', () => {
    localStorage.setItem('portfolio-theme', 'invalid-theme');
    document.body.classList.add('host-shell');

    render(<App />);

    expect(document.body).toHaveClass('host-shell', 'dark-theme');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});
