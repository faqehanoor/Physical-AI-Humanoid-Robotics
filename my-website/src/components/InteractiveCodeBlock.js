import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './InteractiveCodeBlock.module.css';

// A simple InteractiveCodeBlock component for executable code examples
function InteractiveCodeBlock({ children, language = 'javascript', title = 'Code Example' }) {
  const [code, setCode] = useState(children.trim());
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Running code...');

    // In a real implementation, this would connect to a code execution service
    // For now, we'll simulate execution for simple JavaScript examples
    try {
      // This is a simplified simulation - in production, use a proper code execution service
      if (language === 'javascript') {
        // For security, we won't actually execute arbitrary JS in the browser
        // Instead, we'll just show what would happen
        setOutput('Code executed successfully! (Simulated output)');
      } else {
        setOutput(`Executing ${language} code... (This would connect to a code execution service in production)`);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetCode = () => {
    // Reset to original code (in a real implementation, this would come from props)
    setOutput('');
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className={styles.interactiveCodeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeTitle}>{title}</span>
        <div className={styles.codeActions}>
          <button
            className={clsx('button button--sm', styles.runButton)}
            onClick={handleRunCode}
            disabled={isRunning}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
          <button
            className={clsx('button button--sm button--outline', styles.resetButton)}
            onClick={handleResetCode}
          >
            Reset
          </button>
        </div>
      </div>
      <div className={styles.codeEditor}>
        <textarea
          className={styles.codeTextarea}
          value={code}
          onChange={handleCodeChange}
          spellCheck="false"
        />
      </div>
      {output && (
        <div className={styles.codeOutput}>
          <div className={styles.outputHeader}>Output:</div>
          <pre className={styles.outputContent}>{output}</pre>
        </div>
      )}
    </div>
  );
}

export default InteractiveCodeBlock;