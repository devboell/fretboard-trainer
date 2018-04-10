import knex from '../connector'

export const quizzes = () => knex('Quiz').select('*')

export const createQuiz = async (_, obj) => {
  const newId = await knex('Quiz').insert(obj)
  const result = await knex('Quiz')
    .where({ id: newId[0] })
    .select('*')
  return result[0]
}

export const updateQuiz = async (_, obj) => {
  await knex('Quiz')
    .where({ id: obj.id })
    .update({ name: obj.name })

  return obj
}
export const deleteQuiz = async (_, obj) => {
  const nrOfRows = await knex('Quiz')
    .where({ id: obj.id })
    .del()

  return nrOfRows === 1 ? obj.id : 'ERROR' // TODO: unhandled error
}
