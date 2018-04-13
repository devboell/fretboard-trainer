import knex from '../../connector'
import {
  quizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../quiz'

describe('Quiz resolver', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })

  it('quizzes', async () => {
    const received = await quizzes()
    expect(received).toMatchSnapshot()
  })

  it('createQuiz', async () => {
    const received = await createQuiz(null, { name: 'new' })
    expect(received).toMatchSnapshot()
  })

  it('updateQuiz', async () => {
    const received = await updateQuiz(null, { id: 1, name: 'updated' })
    expect(received).toMatchSnapshot()
  })

  it('deleteQuiz existing quiz', async () => {
    const received = await deleteQuiz(null, { id: 3 })
    expect(received).toMatchSnapshot()
  })

  it('deleteQuiz non-existing quiz', async () => {
    const received = await deleteQuiz(null, { id: 7 })
    expect(received).toMatchSnapshot()
  })
})
