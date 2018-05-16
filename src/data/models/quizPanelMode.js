import knex from '../connector'

export const findByQuizId = id =>
  knex('Quiz_PanelMode').where({ quizId: id })

export const create = async (quizId, panelModeIds) => {
  const values = panelModeIds.map(pid => ({
    quizId, panelModeId: pid,
  }))
  return knex('Quiz_PanelMode').insert(values)
}

export const removeByQuizId = id =>
  knex('Quiz_PanelMode')
    .where({ quizId: id })
    .del()
