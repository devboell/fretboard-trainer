import knex from '../connector'


export const findByQuizId = quizId =>
  knex('Timer').where({ quizId }).first()

export const create = async (quizId, values) => {
  const result = await knex('Timer').insert({ quizId, ...values })
  return result[0]
}

export const update = (quizId, values) =>
  knex('Timer')
    .where({ quizId })
    .update(values)
