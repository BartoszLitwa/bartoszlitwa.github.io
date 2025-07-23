import './App.css';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

// Lazy load components for better performance
const Banner = React.lazy(() => import('./components/Banner/SimpleBanner'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Certifications = React.lazy(() => import('./components/Certifications/Certifications'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

// Enhanced loading component
const LoadingSpinner = () => (
  <div className="loading-spinner" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '4rem',
    color: 'var(--text-primary)',
    minHeight: '200px'
  }}>
    <div className="spinner-content">
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--border-color)',
        borderTop: '3px solid var(--accent-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1rem'
      }}></div>
      <div>Loading...</div>
    </div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ThemeToggle />
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <main id="main-content" role="main">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Banner />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Certifications />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </LanguageProvider>
  );
}

export default App;
