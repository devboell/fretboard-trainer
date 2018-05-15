import knex from 'data/connector'
import {
  findByQuizId,
  create,
  removeByQuizId,
} from '../quizPanelMode'

describe('models, quizPanelMode', () => {
  setUpData(knex)

  it('findByQuizId', async () => {
    const expected = [
      { panel_id: 1, quiz_id: 1 },
      { panel_id: 2, quiz_id: 1 },
      { panel_id: 3, quiz_id: 1 },
    ]
    const result = await findByQuizId(1)
    expect(result).toEqual(expected)
  })

  it('create', async () => {
    const result = await create(1, [98, 99])
    expect(result).toEqual([11])
  })


  it('remove', async () => {
    const result = await removeByQuizId(3)
    expect(result).toBe(1)
  })
})
