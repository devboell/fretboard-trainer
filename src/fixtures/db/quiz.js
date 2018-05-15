import {
  quizValues1,
  quizValues2,
  quizValues3,
  quizValues4,
  quizValues5,
  quizValues6,
  createValues,
  updateValues,
} from '../quiz'

export const quizzes = [
  { id: 1, ...quizValues1 },
  { id: 2, ...quizValues2 },
  { id: 3, ...quizValues3 },
  { id: 4, ...quizValues4 },
  { id: 5, ...quizValues5 },
  { id: 6, ...quizValues6 },
]

export const quiz3 = { id: 3, ...quizValues3 }

export const createQuizInputValues = {
  input: {
    quiz: createValues,
    panelIds: [1, 2],
  },
}

export const createdQuiz = {
  id: 7,
  ...createValues,
}

export const updateQuizInputValues = {
  input: {
    id: 3,
    quiz: updateValues,
    panelIds: [1, 2],
  },
}

export const updatedQuiz = {
  id: 3,
  ...updateValues,
}

export { createValues, updateValues }

export const panel1 = {
  id: 1,
  q: 'fretboard',
  a: 'name',
}

export const panel2 = {
  id: 2,
  q: 'fretboard',
  a: 'staff',
}

export const panel3 = {
  id: 3,
  q: 'fretboard',
  a: 'sound',
}
