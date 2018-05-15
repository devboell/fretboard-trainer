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
  {
    id: '1',
    ...quizValues1,
    __typename: 'Quiz',
    panels: [panel1, panel2, panel3],
  },
  {
    id: '2',
    ...quizValues2,
    __typename: 'Quiz',
    panels: [panel1, panel2],
  },
  {
    id: '3',
    ...quizValues3,
    __typename: 'Quiz',
    panels: [panel1],
  },
  {
    id: '4',
    ...quizValues4,
    __typename: 'Quiz',
    panels: [panel1],
  },
  {
    id: '5',
    ...quizValues5,
    __typename: 'Quiz',
    panels: [panel1],
  },
  {
    id: '6',
    ...quizValues6,
    __typename: 'Quiz',
    panels: [panel1],
  },
]

export const createQuizInputValues = {
  input: {
    quiz: {
      ...createValues,
      // __typename: 'Quiz',
    },
    panelIds: [1, 2],
  },
}

export const createdQuiz = {
  id: '7',
  ...createValues,
  __typename: 'Quiz',
  panels: [panel1, panel2],
}

export const updateQuizInputValues = {
  input: {
    id: '3',
    quiz: updateValues,
    panelIds: [1, 2, 3],
  },
}

export const updatedQuiz = {
  id: '3',
  ...updateValues,
  __typename: 'Quiz',
  panels: [panel1, panel2, panel3],
}

