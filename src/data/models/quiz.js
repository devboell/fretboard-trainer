import knex from '../connector'

export const findAll = () =>
  knex('quiz').select()

export const findById = id =>
  knex('quiz').where({ id }).first()

export const panelsByQuizId = id =>
  knex('quiz')
    .select(['pm.id', 'pm.q', 'pm.a'])
    .leftJoin('quiz_panel_mode as qpm', 'quiz.id', 'qpm.quiz_id')
    .leftJoin('panel_mode as pm', 'qpm.panel_id', 'pm.id')
    .where({ 'quiz.id': id })

export const create = async (args) => {
  const result = await knex('quiz').insert(args)
  return result[0]
}

export const update = (id, values) =>
  knex('quiz')
    .where({ id })
    .update(values)


export const remove = id =>
  knex('quiz')
    .where({ id })
    .del()
