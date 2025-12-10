import React from 'react';

// A simple wrapper for interactive elements
function ToggleWrapper({ children }) {
  return (
    <div className="interactive-element">
      {children}
    </div>
  );
}

export default ToggleWrapper;