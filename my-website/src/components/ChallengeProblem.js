import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ChallengeProblem.module.css';

// ChallengeProblem component for more advanced problems
function ChallengeProblem({
  title = 'Challenge Problem',
  description,
  instructions,
  hints = [],
  difficulty = 'intermediate',
  points = 10
}) {
  const [showHint, setShowHint] = useState(false);
  const [solutionSubmitted, setSolutionSubmitted] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleSubmit = () => {
    // In a real implementation, this would validate the solution
    setSolutionSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setSolutionSubmitted(false);
    setShowHint(false);
  };

  return (
    <div className={clsx(styles.challengeProblem, styles[`difficulty-${difficulty}`])}>
      <div className={styles.challengeHeader}>
        <h3 className={styles.challengeTitle}>
          <span className={clsx(styles.difficultyBadge, styles[`difficulty-${difficulty}`])}>
            {difficulty.toUpperCase()}
          </span>
          {title}
          <span className={styles.pointsBadge}>
            {points} pts
          </span>
        </h3>
      </div>

      <div className={styles.challengeContent}>
        <div className={styles.challengeDescription}>
          <p>{description}</p>
        </div>

        <div className={styles.challengeInstructions}>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>

        <div className={styles.challengeInput}>
          <textarea
            className={styles.answerTextarea}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your solution here..."
            rows="6"
          />
        </div>

        <div className={styles.challengeActions}>
          <button
            className={clsx('button button--primary', styles.submitButton)}
            onClick={handleSubmit}
          >
            Submit Solution
          </button>
          {hints.length > 0 && (
            <button
              className={clsx('button button--outline', styles.hintButton)}
              onClick={handleShowHint}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
          <button
            className={clsx('button button--default', styles.resetButton)}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {showHint && hints.length > 0 && (
          <div className={styles.hint}>
            <h4>Hint:</h4>
            <p>{hints[0]}</p>
          </div>
        )}

        {solutionSubmitted && (
          <div className={styles.submissionFeedback}>
            <h4>Submission Feedback:</h4>
            <p>Your solution has been submitted! (Simulated evaluation)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChallengeProblem;