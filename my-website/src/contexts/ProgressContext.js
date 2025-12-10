import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  completedLessons: [],
  completedChapters: [],
  userProgress: {}
};

// Define actions
const SET_LESSON_COMPLETED = 'SET_LESSON_COMPLETED';
const SET_CHAPTER_COMPLETED = 'SET_CHAPTER_COMPLETED';
const RESET_PROGRESS = 'RESET_PROGRESS';

// Reducer function
function progressReducer(state, action) {
  switch (action.type) {
    case SET_LESSON_COMPLETED:
      const lessonId = action.payload.lessonId;
      if (state.completedLessons.includes(lessonId)) {
        return state;
      }
      return {
        ...state,
        completedLessons: [...state.completedLessons, lessonId],
        userProgress: {
          ...state.userProgress,
          [lessonId]: {
            completed: true,
            completedAt: new Date().toISOString(),
            score: action.payload.score || null
          }
        }
      };

    case SET_CHAPTER_COMPLETED:
      const chapterId = action.payload.chapterId;
      if (state.completedChapters.includes(chapterId)) {
        return state;
      }
      return {
        ...state,
        completedChapters: [...state.completedChapters, chapterId]
      };

    case RESET_PROGRESS:
      return initialState;

    default:
      return state;
  }
}

// Create context
const ProgressContext = createContext();

// Provider component
export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  // Actions
  const setLessonCompleted = (lessonId, score) => {
    dispatch({ type: SET_LESSON_COMPLETED, payload: { lessonId, score } });
  };

  const setChapterCompleted = (chapterId) => {
    dispatch({ type: SET_CHAPTER_COMPLETED, payload: { chapterId } });
  };

  const resetProgress = () => {
    dispatch({ type: RESET_PROGRESS });
  };

  const isLessonCompleted = (lessonId) => {
    return state.completedLessons.includes(lessonId);
  };

  const isChapterCompleted = (chapterId) => {
    return state.completedChapters.includes(chapterId);
  };

  const getProgressPercentage = () => {
    // For now, let's calculate based on lessons (assuming 3 lessons per chapter)
    const totalLessons = 3; // For chapter 1
    const completedLessons = state.completedLessons.length;
    return Math.min(100, Math.round((completedLessons / totalLessons) * 100));
  };

  const value = {
    completedLessons: state.completedLessons,
    completedChapters: state.completedChapters,
    userProgress: state.userProgress,
    setLessonCompleted,
    setChapterCompleted,
    resetProgress,
    isLessonCompleted,
    isChapterCompleted,
    getProgressPercentage
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

// Custom hook to use the progress context
export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}