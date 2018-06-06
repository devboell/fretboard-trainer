import * as Quiz from '../models/quiz'
import * as QPM from '../models/quizPanelMode'


export const quizzes = async () =>
  Quiz.findAll()

export const panelModes = async obj =>
  Quiz.panelModesByQuizId(obj.id)

export const createQuiz = async (_, args) => {
  const { quiz, panelModeIds } = args.input
  const newId = await Quiz.create(quiz)
  await QPM.create(newId, panelModeIds)
  return Quiz.findById(newId)
}

export const updateQuiz = async (_, args) => {
  const {
    id,
    quiz,
    panelModeIds,
  } = args.input

  await Quiz.update(id, quiz)
  await QPM.removeByQuizId(id)
  await QPM.create(id, panelModeIds)

  return Quiz.findById(id)
}

export const deleteQuiz = async (_, args) => {
  const nrOfRows = await Quiz.remove(args.id)

  return nrOfRows === 1 ? args.id : 'ERROR' // TODO: unhandled error
}
