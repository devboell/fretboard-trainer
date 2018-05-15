import { graphql } from 'graphql'
import knex from 'data/connector'
import QUIZZES from 'graphql/Quizzes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import * as fxt from 'fixtures/graphql/quiz'
import schema from '../schema'


describe('schema', () => {
  setUpData(knex)

  it('should return quizzes', async () => {
    const queryObj = {
      schema,
      source: QUIZZES.loc.source,
    }
    const result = await graphql(queryObj)
    expect(result.data.quizzes).toEqual(fxt.quizzes)
  })

  it('should create a quiz', async () => {
    const queryObj = {
      schema,
      source: CREATE_QUIZ.loc.source,
      variableValues: fxt.createQuizInputValues,
    }
    const result = await graphql(queryObj)
    console.log('result', result)
    expect(result.data.createQuiz).toEqual(fxt.createdQuiz)
  })

  it('should update a quiz', async () => {
    const queryObj = {
      schema,
      source: UPDATE_QUIZ.loc.source,
      variableValues: fxt.updateQuizInputValues,
    }
    const result = await graphql(queryObj)
    expect(result.data.updateQuiz).toEqual(fxt.updatedQuiz)
  })
})
