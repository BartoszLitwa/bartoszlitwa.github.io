import React, { Suspense, lazy, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NavBar from './components/NavBar/NavBar';
import LazySection from './components/LazySection/LazySection';
import CompanyEcosystem from './components/Ecosystem/CompanyEcosystem';
import { createSectionObserver } from './utils/umami';
import { useLanguage } from './hooks/useLanguage';
import './App.css';

const TRACKED_SECTIONS = [
  { id: 'home', name: 'Banner' },
  { id: 'ecosystem', name: 'CompanyEcosystem' },
  { id: 'experience', name: 'Experience' },
  { id: 'certifications', name: 'Certifications' }
];

const SimpleBanner = lazy(() => import('./components/Banner/SimpleBanner'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const LoadingFallback = () => {
  const { t } = useLanguage();
  return (
    <div className="loading-state" role="status">
      {t('common.loading')}
    </div>
  );
};

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
          <main id="main-content" tabIndex={-1}>
            <Suspense fallback={<LoadingFallback />}>
              <SimpleBanner />
            </Suspense>
            <CompanyEcosystem />
            <LazySection sectionId="experience" fallback={<LoadingFallback />} minHeight={360}>
              <Suspense fallback={<LoadingFallback />}>
                <Experience />
              </Suspense>
            </LazySection>
            <LazySection sectionId="certifications" fallback={<LoadingFallback />} minHeight={260}>
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
