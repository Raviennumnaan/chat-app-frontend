import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DarkModeProvider } from './context/DarkModeContext';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';
import { TokenProvider } from './context/TokenContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <DarkModeProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
