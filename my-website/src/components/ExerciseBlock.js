import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ExerciseBlock.module.css';

// ExerciseBlock component for interactive exercises
function ExerciseBlock({
  title = 'Exercise',
  description,
  instructions,
  initialCode = '',
  solution,
  difficulty = 'beginner',
  type = 'coding'
}) {
  const [userCode, setUserCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleRunCode = () => {
    setOutput('Running code... (Simulated)');
    setIsSubmitted(true);
  };

  const handleCheckSolution = () => {
    // In a real implementation, this would check the user's solution
    setOutput('Solution checked! (Simulated)');
    setIsSubmitted(true);
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const handleReset = () => {
    setUserCode(initialCode);
    setOutput('');
    setIsSubmitted(false);
    setShowSolution(false);
  };

  return (
    <div className={clsx(styles.exerciseBlock, styles[`difficulty-${difficulty}`])}>
      <div className={styles.exerciseHeader}>
        <h3 className={styles.exerciseTitle}>
          <span className={clsx(styles.difficultyBadge, styles[`difficulty-${difficulty}`])}>
            {difficulty.toUpperCase()}
          </span>
          {title}
        </h3>
      </div>

      <div className={styles.exerciseContent}>
        <div className={styles.exerciseDescription}>
          <p>{description}</p>
        </div>

        <div className={styles.exerciseInstructions}>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>

        {type === 'coding' && (
          <div className={styles.codeEditor}>
            <textarea
              className={styles.codeTextarea}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="Write your code here..."
            />
          </div>
        )}

        <div className={styles.exerciseActions}>
          <button
            className={clsx('button button--primary', styles.runButton)}
            onClick={handleRunCode}
          >
            Run Code
          </button>
          <button
            className={clsx('button button--secondary', styles.checkButton)}
            onClick={handleCheckSolution}
          >
            Check Solution
          </button>
          <button
            className={clsx('button button--outline', styles.solutionButton)}
            onClick={handleShowSolution}
          >
            Show Solution
          </button>
          <button
            className={clsx('button button--default', styles.resetButton)}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {showSolution && solution && (
          <div className={styles.solution}>
            <h4>Solution:</h4>
            <pre className={styles.solutionCode}>{solution}</pre>
          </div>
        )}

        {output && (
          <div className={styles.output}>
            <h4>Output:</h4>
            <pre>{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseBlock;