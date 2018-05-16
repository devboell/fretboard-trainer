import { graphql } from 'graphql'
import knex from 'data/connector'
import QUIZZES from 'graphql/Quizzes'
import PANEL_MODES from 'graphql/PanelModes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import DELETE_QUIZ from 'graphql/DeleteQuiz'
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

  it('should return panelModes', async () => {
    const queryObj = {
      schema,
      source: PANEL_MODES.loc.source,
    }
    const result = await graphql(queryObj)
    expect(result.data.panelModes).toMatchSnapshot()
  })

  it('should create a quiz', async () => {
    const queryObj = {
      schema,
      source: CREATE_QUIZ.loc.source,
      variableValues: fxt.createQuizInputValues,
    }
    const result = await graphql(queryObj)
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

  it('should delete a quiz', async () => {
    const queryObj = {
      schema,
      source: DELETE_QUIZ.loc.source,
      variableValues: { id: 3 },
    }
    const result = await graphql(queryObj)
    expect(result.data.deleteQuiz).toBe('3')
  })
})
