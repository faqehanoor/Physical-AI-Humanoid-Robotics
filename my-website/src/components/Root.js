import React from 'react';
import {ProgressProvider} from '../contexts/ProgressContext';

// Root component that wraps the entire app with context providers
export default function Root({children}) {
  return (
    <ProgressProvider>
      {children}
    </ProgressProvider>
  );
}