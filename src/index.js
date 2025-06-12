import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PopX App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong with PopX App</h1>
          <p>
            We're sorry, but something went wrong. Please try refreshing the page.
            If the problem persists, please check the console for more details.
          </p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Hide loading fallback
const loadingFallback = document.getElementById('loading-fallback');
if (loadingFallback) {
  loadingFallback.style.display = 'none';
}

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 PopX Mobile App loaded successfully!');
  console.log('📱 Features: Landing, Login, Signup, Profile screens');
  console.log('🎨 Design: Pixel-perfect mobile interface');
}