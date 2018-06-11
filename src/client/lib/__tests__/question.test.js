import { take } from 'ramda'
import {
  quiz1 as pcQuiz,
  quiz2 as pitchQuiz,
} from 'fixtures/graphql/quiz'
import getQuestion from '../question'

const mockTake = take

jest.mock('lodash/fp', () => ({
  shuffle: jest.fn(arr => arr),
  sample: jest.fn(arr => mockTake(1, arr)[0]),
  sampleSize: jest.fn(size => arr => mockTake(size, arr)),
}))

it('pc question', () => {
  expect(getQuestion(pcQuiz)).toMatchSnapshot()
})

it('pitch question', () => {
  expect(getQuestion(pitchQuiz)).toMatchSnapshot()
})

it('invalid question', () => {
  const invalidQuiz = { ...pcQuiz, type: 'invalid' }
  expect(getQuestion(invalidQuiz)).toBeNull()
})
