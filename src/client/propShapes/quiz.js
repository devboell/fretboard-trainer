import pt from 'prop-types'


export const panelModeShape = pt.shape({
  id: pt.string,
  question: pt.string,
  answer: pt.string,
})

export const quizShape = pt.shape({
  id: pt.string,
  name: pt.string,
  type: pt.string,
  tuning: pt.string,
  width: pt.number,
  panelModes: pt.arrayOf(panelModeShape),
})
