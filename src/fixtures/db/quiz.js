import { panel1, panel2, panel3 } from './panelMode'
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
    panelModes: [panel1, panel2],
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
    panelModes: [panel1, panel2],
  },
}

export const updatedQuiz = {
  id: 3,
  ...updateValues,
}

export { createValues, updateValues, panel1, panel2, panel3 }

