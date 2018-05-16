import knex from 'data/connector'
import * as fxt from 'fixtures/db/quiz'
import {
  findAll,
  findById,
  panelModesByQuizId,
  create,
  update,
  remove,
} from '../quiz'

describe('models, quiz', () => {
  setUpData(knex)

  it('findAll', async () => {
    expect(await findAll()).toEqual(fxt.quizzes)
  })

  it('findById', async () => {
    const result = await findById(3)
    expect(result).toEqual(fxt.quiz3)
  })

  it('panelModesByQuizId', async () => {
    const result = await panelModesByQuizId(1)
    expect(result).toEqual([fxt.panel1, fxt.panel2, fxt.panel3])
  })

  it('create', async () => {
    const result = await create(fxt.createValues)
    expect(result).toBe(7)
  })

  it('update', async () => {
    const result = await update(3, fxt.updateValues)
    expect(result).toBe(1)
  })

  it('remove', async () => {
    const result = await remove(3)
    expect(result).toBe(1)
  })
})
