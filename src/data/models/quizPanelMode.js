import knex from '../connector'

export const findByQuizId = id =>
  knex('quiz_panel_mode').where({ quiz_id: id })

export const create = async (quizId, panelIds) => {
  const values = panelIds.map(pid => ({
    quiz_id: quizId, panel_id: pid,
  }))
  return knex('quiz_panel_mode').insert(values)
}

export const removeByQuizId = id =>
  knex('quiz_panel_mode')
    .where({ quiz_id: id })
    .del()
