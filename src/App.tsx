import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NavBar from './components/NavBar/NavBar';
import './App.css';

// Lazy load components for better code splitting
const SimpleBanner = lazy(() => import('./components/Banner/SimpleBanner'));
const FeaturedProject = lazy(() => import('./components/FeaturedProject/FeaturedProject'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Contact = lazy(() => import('./components/Contact/Contact'));
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
              <Skills />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
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
