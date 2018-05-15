import * as fxt from 'fixtures/db/quiz'
import knex from '../../connector'
import {
  quizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../quiz'


describe('resolvers, quiz', () => {
  setUpData(knex)

  it('quizzes', async () => {
    const received = await quizzes()
    expect(received).toEqual(fxt.quizzes)
  })

  it('createQuiz', async () => {
    const received = await createQuiz(null, fxt.createQuizInputValues)
    expect(received).toEqual(fxt.createdQuiz)
  })

  it('updateQuiz', async () => {
    const received = await updateQuiz(null, fxt.updateQuizInputValues)
    expect(received).toEqual(fxt.updatedQuiz)
  })

  it('deleteQuiz existing quiz', async () => {
    const received = await deleteQuiz(null, { id: 3 })
    expect(received).toBe(3)
  })

  it('deleteQuiz non-existing quiz', async () => {
    const received = await deleteQuiz(null, { id: 7 })
    expect(received).toBe('ERROR')
  })
})
