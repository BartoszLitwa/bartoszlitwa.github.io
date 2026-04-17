import React, { Suspense, lazy, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NavBar from './components/NavBar/NavBar';
import LazySection from './components/LazySection/LazySection';
import { createSectionObserver } from './utils/umami';
import './App.css';

const TRACKED_SECTIONS = [
  { id: 'home', name: 'Banner' },
  { id: 'featured-project', name: 'FeaturedProject' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'certifications', name: 'Certifications' }
];

const SimpleBanner = lazy(() => import('./components/Banner/SimpleBanner'));
const FeaturedProject = lazy(() => import('./components/FeaturedProject/FeaturedProject'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const LoadingFallback: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '40vh',
      color: 'var(--text-secondary)'
    }}
  >
    <div>Loading...</div>
  </div>
);

function App() {
  useEffect(() => {
    const observer = createSectionObserver(TRACKED_SECTIONS);
    if (!observer) return;

    const observedIds = new Set<string>();
    const observeAvailableSections = () => {
      TRACKED_SECTIONS.forEach(({ id }) => {
        if (observedIds.has(id)) return;
        const section = document.getElementById(id);
        if (!section) return;
        observer.observe(section);
        observedIds.add(id);
      });
    };

    observeAvailableSections();
    const mutationObserver = new MutationObserver(observeAvailableSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="App">
          <NavBar />
          <main id="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <SimpleBanner />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <FeaturedProject />
            </Suspense>
            <LazySection sectionId="experience" fallback={<LoadingFallback />} minHeight={520}>
              <Suspense fallback={<LoadingFallback />}>
                <Experience />
              </Suspense>
            </LazySection>
            <LazySection sectionId="skills" fallback={<LoadingFallback />} minHeight={520}>
              <Suspense fallback={<LoadingFallback />}>
                <Skills />
              </Suspense>
            </LazySection>
            <LazySection sectionId="projects" fallback={<LoadingFallback />} minHeight={520}>
              <Suspense fallback={<LoadingFallback />}>
                <Projects />
              </Suspense>
            </LazySection>
            <LazySection sectionId="certifications" fallback={<LoadingFallback />} minHeight={420}>
              <Suspense fallback={<LoadingFallback />}>
                <Certifications />
              </Suspense>
            </LazySection>
            <LazySection sectionId="footer" fallback={<LoadingFallback />} minHeight={260}>
              <Suspense fallback={<LoadingFallback />}>
                <Footer />
              </Suspense>
            </LazySection>
          </main>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
