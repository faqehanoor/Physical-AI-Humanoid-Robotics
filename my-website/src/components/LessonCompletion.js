import React, { useEffect, useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';

// Component to track lesson completion
function LessonCompletion({ lessonId, title }) {
  const { isLessonCompleted, setLessonCompleted } = useProgress();
  const [markedAsCompleted, setMarkedAsCompleted] = useState(false);

  useEffect(() => {
    // Check if lesson is already marked as completed
    if (isLessonCompleted(lessonId) && !markedAsCompleted) {
      setMarkedAsCompleted(true);
    }
  }, [lessonId, isLessonCompleted, markedAsCompleted]);

  const markAsComplete = () => {
    if (!isLessonCompleted(lessonId)) {
      setLessonCompleted(lessonId);
      setMarkedAsCompleted(true);
      alert(`Congratulations! You've completed "${title}"`);
    }
  };

  if (isLessonCompleted(lessonId)) {
    return (
      <div className="alert alert--success margin-bottom--lg">
        <h4>✓ Lesson Completed</h4>
        <p>You have completed "{title}". Great job!</p>
      </div>
    );
  }

  return (
    <div className="margin-bottom--lg">
      <div className="card">
        <div className="card__body">
          <h4>Complete this lesson</h4>
          <p>Mark this lesson as completed when you've finished reading and practicing.</p>
          <button
            className="button button--primary"
            onClick={markAsComplete}
            disabled={markedAsCompleted}
          >
            {markedAsCompleted ? 'Completed!' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonCompletion;