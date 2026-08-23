import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the company-first navigation and initial skeletons', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Company' })).toHaveAttribute('href', '#ecosystem');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(screen.getAllByText('Loading...').length).toBeGreaterThan(0);
  });

  it('presents the complete product family with honest link states', async () => {
    render(<App />);

    expect(
      await screen.findByRole('heading', {
        name: 'An AI-native company, built as a product system'
      })
    ).toBeInTheDocument();

    const productCards = document.querySelectorAll('[data-product-id]');
    expect(productCards).toHaveLength(9);

    for (const name of [
      'DoifyNow',
      'RentifyNow',
      'HouseifyNow',
      'GoalifyNow',
      'DeployifyNow',
      'PostifyNow',
      'LeadifyNow',
      'InsightifyNow',
      'SupportifyNow'
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }

    const deployifyCard = document.querySelector('[data-product-id="deployifynow"]');
    const postifyCard = document.querySelector('[data-product-id="postifynow"]');
    expect(deployifyCard).not.toBeNull();
    expect(postifyCard).not.toBeNull();
    expect(within(deployifyCard as HTMLElement).getByRole('link')).toHaveAttribute(
      'href',
      'https://deployifynow.com'
    );
    expect(within(postifyCard as HTMLElement).queryByRole('link')).not.toBeInTheDocument();
  });

  it('switches language from EN to PL', async () => {
    const user = userEvent.setup();
    render(<App />);

    const languageToggle = screen.getByRole('button', { name: /select language/i });
    await user.click(languageToggle);

    const polishOption = screen.getByRole('option', { name: /Polski/i });
    await user.click(polishOption);

    expect(await screen.findByRole('link', { name: /Kompetencje/i })).toBeInTheDocument();
  });

  it('keeps keyboard focus predictable for the skip link and language menu', async () => {
    const user = userEvent.setup();
    render(<App />);

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    skipLink.focus();
    await user.keyboard('{Enter}');
    expect(window.location.hash).toBe('#main-content');
    expect(screen.getByRole('main')).toHaveFocus();

    const languageToggle = screen.getByRole('button', { name: /select language/i });
    await user.click(languageToggle);
    const englishOption = screen.getByRole('option', { name: /English/i });
    await waitFor(() => expect(englishOption).toHaveFocus());

    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('option', { name: /Polski/i })).toHaveFocus();

    await user.keyboard('{Escape}');
    await waitFor(() => expect(languageToggle).toHaveFocus());
    expect(languageToggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the expanded navigation menu with Escape and restores toggle focus', async () => {
    const user = userEvent.setup();
    render(<App />);

    const menuToggle = screen.getByRole('button', { name: /navigation menu/i });
    await user.click(menuToggle);
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');
    await waitFor(() => expect(menuToggle).toHaveFocus());
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('updates the current navigation item from the page scroll position', async () => {
    let scrollPosition = 0;
    const sectionPositions: Record<string, number> = {
      home: 0,
      ecosystem: 1000,
      work: 3000,
      experience: 4500,
      skills: 6000
    };
    const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY');
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      get: () => scrollPosition
    });
    const rectSpy = vi
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockImplementation(function (this: HTMLElement) {
        const top = (sectionPositions[this.id] ?? 0) - scrollPosition;
        return {
          x: 0,
          y: top,
          top,
          right: 100,
          bottom: top + 800,
          left: 0,
          width: 100,
          height: 800,
          toJSON: () => ({})
        } as DOMRect;
      });

    try {
      render(<App />);
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');

      scrollPosition = 900;
      window.dispatchEvent(new Event('scroll'));

      await waitFor(() =>
        expect(screen.getByRole('link', { name: 'Company' })).toHaveAttribute(
          'aria-current',
          'page'
        )
      );
    } finally {
      rectSpy.mockRestore();
      if (originalScrollY) Object.defineProperty(window, 'scrollY', originalScrollY);
    }
  });

  it('provides stable targets for links to lazy sections', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (const sectionId of ['work', 'experience', 'skills', 'certifications']) {
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
