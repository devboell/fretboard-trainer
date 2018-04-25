import reducer, { selectQuiz } from '../reducer'
import * as fxtrs from '../fixtures'


it('select a quiz', () => {
  const selectedQuiz = fxtrs.quiz3
  const action = selectQuiz(fxtrs.quizzes)(selectedQuiz.id)
  const nextState = reducer(undefined, action)

  expect(nextState.selectedQuizId).toEqual(selectedQuiz.id)
  expect(nextState.original).toEqual(selectedQuiz)
  expect(nextState.buffer).toEqual(selectedQuiz)
})
