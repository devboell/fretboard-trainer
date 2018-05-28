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
      { panelModeId: 1, quizId: 1 },
      { panelModeId: 2, quizId: 1 },
      { panelModeId: 3, quizId: 1 },
      { panelModeId: 4, quizId: 1 },
    ]
    const result = await findByQuizId(1)
    expect(result).toEqual(expected)
  })

  it('create', async () => {
    const result = await create(1, [98, 99])
    expect(result).toEqual([12])
  })


  it('removeByQuizId', async () => {
    const result = await removeByQuizId(3)
    expect(result).toBe(1)
  })
})
