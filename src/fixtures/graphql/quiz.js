import { panel1, panel2, panel3, panel4 } from './panelMode'
import {
  timer1,
  timer2,
  timer3,
} from './timer'

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
    timer: timer1,
    __typename: 'Quiz',
    panelModes: [panel1],
  },
  {
    id: '2',
    ...quizValues2,
    timer: timer2,
    __typename: 'Quiz',
    panelModes: [panel1, panel2, panel3, panel4],
  },
  {
    id: '3',
    ...quizValues3,
    timer: timer3,
    __typename: 'Quiz',
    panelModes: [panel1],
  },
  {
    id: '4',
    ...quizValues4,
    timer: timer1,
    __typename: 'Quiz',
    panelModes: [panel1],
  },
  {
    id: '5',
    ...quizValues5,
    timer: timer1,
    __typename: 'Quiz',
    panelModes: [panel1],
  },
  {
    id: '6',
    ...quizValues6,
    timer: timer1,
    __typename: 'Quiz',
    panelModes: [panel1],
  },
]

export const createQuizInputValues = {
  input: {
    quiz: {
      ...createValues,
    },
    timer: timer1,
    panelModeIds: ['1', '2'],
  },
}

export const createdQuiz = {
  id: '7',
  ...createValues,
  __typename: 'Quiz',
  timer: timer1,
  panelModes: [panel1, panel2],
}

export const updateQuizInputValues = {
  input: {
    id: '3',
    quiz: updateValues,
    timer: timer3,
    panelModeIds: ['1', '2', '3'],
  },
}

export const updatedQuiz = {
  id: '3',
  ...updateValues,
  __typename: 'Quiz',
  timer: timer3,
  panelModes: [panel1, panel2, panel3],
}

