import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LanguageProvider } from '../LanguageProvider/LanguageProvider';
import ProjectCard from './ProjectCard';

const project = {
  title: 'Example Project',
  description: 'A small test project.',
  imgUrl: '/missing-preview.webp',
  type: 'React|TypeScript',
  url: 'https://example.com/project',
  metrics: 'A focused implementation'
};

describe('ProjectCard', () => {
  it('keeps the card readable when its image cannot load', () => {
    render(
      <LanguageProvider>
        <ProjectCard card={project} />
      </LanguageProvider>
    );

    const image = screen.getByRole('img', { name: /Example Project project preview/i });
    fireEvent.error(image);

    expect(
      screen.getByRole('img', { name: /No project preview available: Example Project/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Example Project' })).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /View project Example Project/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
