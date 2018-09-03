
const tuning = 'standard'
const width = 13

export const quiz1 = {
  id: 1,
  name: 'Pitch Class',
  description: 'Just notes, no octaves, no timer',
  type: 'pc',
  tuning,
  width,
  allAnswers: 0,
  allowIncorrect: 1,
  useTimer: 0,
  time: 0,
  showNotes: 1,
}

export const quiz2 = {
  id: 2,
  name: 'quiz two',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const quiz3 = {
  id: 3,
  name: 'quiz three',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const quiz4 = {
  id: 4,
  name: 'quiz four',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const quiz5 = {
  id: 5,
  name: 'quiz five',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const quiz6 = {
  id: 6,
  name: 'quiz six',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const quizzes = [
  quiz1,
  quiz2,
  quiz3,
  quiz4,
  quiz5,
  quiz6,
]

export const createValues = {
  name: 'new',
  description: 'no description',
  type: 'pc',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const createQuizInput = {
  input: {
    quiz: createValues,
    panelModeIds: [1, 2],
  },
}

export const createdQuiz = {
  id: 7,
  ...createValues,
}


export const updateValues = {
  id: 3,
  name: 'updated',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: 1,
  allowIncorrect: 1,
  useTimer: 1,
  time: 5,
  showNotes: 0,
}

export const updateQuizInput = {
  input: {
    id: 3,
    quiz: updateValues,
    panelModeIds: [1, 2, 3],
  },
}

export const updatedQuiz = {
  id: 3,
  ...updateValues,
}

export { quiz2PanelModes } from './panelMode'
