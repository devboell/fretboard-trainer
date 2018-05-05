import knex from '../../connector'
import {
  quizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../quiz'

const tuning = 'standard'
const width = 13

const newQuiz = {
  name: 'new',
  type: 'pc',
  tuning,
  width,
}

const updatedQuiz = {
  id: '1',
  name: 'updated',
  type: 'pc',
  tuning,
  width,
}

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
    const received = await createQuiz(null, newQuiz)
    expect(received).toMatchSnapshot()
  })

  it('updateQuiz', async () => {
    const received = await updateQuiz(null, updatedQuiz)
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
