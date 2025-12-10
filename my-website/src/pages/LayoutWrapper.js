import React from 'react';
import {ProgressProvider} from '../contexts/ProgressContext';

// This wrapper ensures the ProgressProvider is available throughout the app
export default function LayoutWrapper({children}) {
  return (
    <ProgressProvider>
      {children}
    </ProgressProvider>
  );
}