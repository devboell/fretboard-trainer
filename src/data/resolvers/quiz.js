import * as Quiz from 'data/models/quiz'
import * as QPM from 'data/models/quizPanelMode'


export const quizzes = async () =>
  Quiz.findAll()

export const panels = async obj =>
  Quiz.panelsByQuizId(obj.id)

export const createQuiz = async (_, args) => {
  const { quiz, panelIds } = args.input
  const newId = await Quiz.create(quiz)
  await QPM.create(newId, panelIds)
  return Quiz.findById(newId)
}

export const updateQuiz = async (_, args) => {
  const { id, quiz, panelIds } = args.input
  await Quiz.update(id, quiz)
  await QPM.removeByQuizId(id)
  await QPM.create(id, panelIds)

  return Quiz.findById(id)
}

export const deleteQuiz = async (_, args) => {
  const nrOfRows = await Quiz.remove(args.id)

  return nrOfRows === 1 ? args.id : 'ERROR' // TODO: unhandled error
}
