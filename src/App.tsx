import './App.css';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

// Lazy load components for better performance
const Banner = React.lazy(() => import('./components/Banner/SimpleBanner'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '2rem',
    color: '#fff' 
  }}>
    <div>Loading...</div>
  </div>
);

function App() {

  return (
    <div className="App">
      <ThemeToggle />
      <ErrorBoundary>
        <NavBar />
      </ErrorBoundary>
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
          <Contact />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
