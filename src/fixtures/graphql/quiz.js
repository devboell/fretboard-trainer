import { panel1, panel2, panel3, panel4 } from './panelMode'

const tuning = 'standard'
const width = 13

export const quiz1 = {
  id: '1',
  name: 'Pitch Class',
  description: 'Just notes, no octaves, no timer',
  type: 'pc',
  tuning,
  width,
  allAnswers: false,
  allowIncorrect: true,
  useTimer: false,
  time: 0,
  __typename: 'Quiz',
  panelModes: [panel1],
}

export const quiz2 = {
  id: '2',
  name: 'quiz two',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
  __typename: 'Quiz',
  panelModes: [panel1, panel2, panel3, panel4],
}

export const quiz3 = {
  id: '3',
  name: 'quiz three',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
  __typename: 'Quiz',
  panelModes: [panel1],
}

export const quiz4 = {
  id: '4',
  name: 'quiz four',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
  __typename: 'Quiz',
  panelModes: [panel1],
}

export const quiz5 = {
  id: '5',
  name: 'quiz five',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
  __typename: 'Quiz',
  panelModes: [panel1],
}

export const quiz6 = {
  id: '6',
  name: 'quiz six',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
  __typename: 'Quiz',
  panelModes: [panel1],
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
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
}


export const createQuizInputValues = {
  input: {
    quiz: createValues,
    panelModeIds: ['1', '2'],
  },
}

export const createdQuiz = {
  id: '7',
  ...createValues,
  __typename: 'Quiz',
  panelModes: [panel1, panel2],
}

export const updateValues = {
  name: 'updated',
  description: 'no description',
  type: 'pitch',
  tuning,
  width,
  allAnswers: true,
  allowIncorrect: true,
  useTimer: true,
  time: 5,
}

export const updateQuizInputValues = {
  input: {
    id: '3',
    quiz: updateValues,
    panelModeIds: ['1', '2', '3'],
  },
}

export const updatedQuiz = {
  id: '3',
  ...updateValues,
  __typename: 'Quiz',
  panelModes: [panel1, panel2, panel3],
}

