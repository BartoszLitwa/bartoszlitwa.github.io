import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <main className="error-state" role="alert">
            <h1>
              {document.documentElement.lang === 'pl'
                ? 'Nie udało się wczytać strony'
                : 'This page could not load'}
            </h1>
            <p>
              {document.documentElement.lang === 'pl'
                ? 'Sprawdź połączenie i wczytaj stronę ponownie.'
                : 'Check your connection and reload the page to try again.'}
            </p>
            <button className="btn-modern btn-primary" onClick={() => window.location.reload()}>
              {document.documentElement.lang === 'pl' ? 'Wczytaj ponownie' : 'Reload page'}
            </button>
          </main>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
