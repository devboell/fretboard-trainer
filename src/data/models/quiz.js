import knex from '../connector'

export const findAll = () =>
  knex('Quiz').select()

export const findById = id =>
  knex('Quiz').where({ id }).first()

export const panelModesByQuizId = id =>
  knex('Quiz')
    .select(['pm.id', 'pm.question', 'pm.answer'])
    .leftJoin('Quiz_PanelMode as qpm', 'Quiz.id', 'qpm.quizId')
    .leftJoin('PanelMode as pm', 'qpm.panelModeId', 'pm.id')
    .where({ 'Quiz.id': id })

export const create = async (args) => {
  const result = await knex('Quiz').insert(args)
  return result[0]
}

export const update = (id, values) =>
  knex('Quiz')
    .where({ id })
    .update(values)


export const remove = id =>
  knex('Quiz')
    .where({ id })
    .del()
