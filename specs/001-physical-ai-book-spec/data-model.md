# Data Model: Physical AI Book

## Content Entities

### Chapter
- **Fields**:
  - id: string (unique identifier)
  - title: string (chapter title)
  - description: string (brief description)
  - lessons: array of Lesson objects
  - prerequisites: array of string (required knowledge)
  - learningObjectives: array of string (what user will learn)
  - estimatedTime: number (minutes to complete)

### Lesson
- **Fields**:
  - id: string (unique identifier)
  - title: string (lesson title)
  - content: string (markdown/MDX content)
  - exercises: array of Exercise objects
  - codeExamples: array of CodeExample objects
  - nextLesson: string (reference to next lesson)
  - prevLesson: string (reference to previous lesson)

### CodeExample
- **Fields**:
  - id: string (unique identifier)
  - title: string (example title)
  - code: string (the actual code)
  - language: string (programming language)
  - description: string (what the example demonstrates)
  - executable: boolean (whether it can be run in browser)
  - dependencies: array of string (required packages/libraries)

### Exercise
- **Fields**:
  - id: string (unique identifier)
  - title: string (exercise title)
  - description: string (what to do)
  - instructions: string (step-by-step instructions)
  - solution: string (sample solution)
  - difficulty: enum (beginner, intermediate)
  - type: enum (coding, conceptual, practical)

## Navigation Structure

### Sidebar
- **Fields**:
  - chapters: array of Chapter references
  - currentChapter: string (currently selected chapter)
  - currentLesson: string (currently selected lesson)
  - progress: number (percentage completed)

## Validation Rules

- Each Chapter must have 1-10 Lessons (as per spec FR-010)
- Each Lesson must have at least one CodeExample (as per constitution principle I)
- Chapter titles must be unique within the book
- Lesson titles must be unique within a Chapter
- All content must be appropriate for beginner-to-intermediate audience (as per constitution principle II)
- CodeExamples must be tested and verified in multiple environments (as per constitution constraint)

## State Transitions

- User progresses from Lesson to Lesson within a Chapter
- User completes Chapter when all Lessons are finished
- User progresses from Chapter to Chapter in sequence
- User can bookmark current position for later return