import knex from '../../connector'
import allQuizzes from '../quiz'

describe('resolver index', () => {
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

  it('findAll', async () => {
    const quizzes = await allQuizzes()
    expect(quizzes).toMatchSnapshot()
  })
})
