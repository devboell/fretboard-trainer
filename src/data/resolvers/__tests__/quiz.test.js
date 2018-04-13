import knex from '../../connector'
import { quizzes } from '../quiz'

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
    const received = await quizzes()
    expect(received).toMatchSnapshot()
  })
})
