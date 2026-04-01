import React, { Suspense, lazy, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NavBar from './components/NavBar/NavBar';
import { createSectionObserver } from './utils/umami';
import './App.css';

const TRACKED_SECTIONS = [
  { id: 'home', name: 'Banner' },
  { id: 'featured-project', name: 'FeaturedProject' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'certifications', name: 'Certifications' },
];

const SimpleBanner = lazy(() => import('./components/Banner/SimpleBanner'));
const FeaturedProject = lazy(() => import('./components/FeaturedProject/FeaturedProject'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    color: 'var(--text-secondary)'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  useEffect(() => {
    const observer = createSectionObserver(TRACKED_SECTIONS);
    if (!observer) return;
    TRACKED_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
            <Suspense fallback={<LoadingFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Footer />
            </Suspense>
          </main>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
